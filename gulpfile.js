var gulp = require('gulp');
var gutil = require('gulp-util');
var pkg = require('./package.json');
var fs = require('fs');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var templateCache = require('gulp-angular-templatecache');
var yaml = require("yamljs");
var del = require('del');
var path = require('path');
var merge = require('merge');
var argv = require('yargs').argv;
var spawn = require('child_process').spawn;
var execSync = require('child_process').execSync;
var mkdirp = require('mkdirp');
var replace = require('gulp-replace');

var geodash = require("geodash-build-pipeline");
var extract = require("geodash-extract");
var showdown = require("showdown");
showdown.setFlavor('github');
showdown.setOption("prefixHeaderId", "");

var configs_by_name = {};
var variables = {};

var cwd = __dirname;
var ts = (new Date).getTime();

var s3 = undefined;

geodash.log.debug(["Extensions supported by require", JSON.stringify(Object.keys(require.extensions))], argv);

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}

if(argv != undefined && (argv.publish == true || argv.publish == "true" || argv.publish == "t"))
{
  var s3_config = {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: "us-west-1"
  };
  geodash.log.info(["S3 Config \""+JSON.stringify(s3_config)+"\"."]);
  s3 = require('gulp-s3-upload')(s3_config);
}

var processBuild = function(rootConfig, t)
{
  t = geodash.resolve.source(rootConfig, t, variables, configs_by_name); // Important to pass copy to resolve
  geodash.log.debug(["", "processBuild(\""+t.name+"\")"], argv);

  if(Array.isArray(t.src) && t.src.length == 0)
  {
    geodash.log.debug(["Nothing to do since t.src is empty array."], argv);
    return true;
  }

  var options = { "src": t.src, "dest": t.dest };
  if(t.type=="js")
  {
    // when t.minified is true, then t.src returns the minified versions
    return geodash.compile.js(merge(options, {
      "outfile": t.outfile,
      "uglify": t.uglify
    }));
  }
  else if(t.type=="css")
  {
    return geodash.comile.css(merge(options, {
      "outfile": t.outfile
    }));
  }
  else if(t.type=="less")
  {
    return geodash.compile.less(merge(options, {
      "outfile": t.outfile,
      "paths": t.paths
    }));
  }
  else if(t.type=="template" || t.type=="templates")
  {
    return geodash.compile.templates(merge(options, {
      "outfile": t.outfile || "templates.js"
    }));
  }
  else
  {
    return undefined;
  }
};

geodash.log.debug(['Debugging...', 'Done with imports'], argv);

geodash.log.debug('Initialized common functions', argv);

geodash.log.debug(['CWD', cwd], argv);

var rootConfig = geodash.load.file("./config.yml", cwd);

var configs = geodash.flatten.configs(geodash.load.config("./config.yml", cwd), cwd);

var geodash_meta_projects = [];
var geodash_meta_plugins = [];
var geodash_meta_controllers = [];
//var geodash_meta_modals = [];

var compile_endpoints = [];
var compile_schemas = [];
var compile_templates = [];
var compile_enumerations = [];
var compile_filters = [];
var compile_handlers = [];
var compile_directives = [];
var compile_controllers = [];
var compile_js = [];
var compile_less = [];
var compile_modals = [];
var test_js = [];
var compilelist = [];

geodash.log.debug('Loaded configs and ready to build pipelines.', argv);

for(var i = 0; i < configs.length; i++)
{
  var config = configs[i];
  geodash_meta_projects.push({
    'name':config.name,
    'version': config.version,
    'description': config.description});

  configs_by_name[config.name] = config;
  //geodash.resources[config.name] = config.resources;

  geodash.log.debug(['########', 'Project '+i+': '+config.name], argv);

  var path_cache = path.join(config.path.base, ".cache");
  var path_plugins = path.join(config.path.base, config.path.geodash, "plugins");

  mkdirp.sync(geodash.expand.home(geodash.resolve.path(path.join(path_cache, "plugins"), cwd)));

  var project_endpoints = [];
  var project_schemas = [];
  var project_templates = [];  // Exported to the compile process
  var project_enumerations = []; // Exported to the compile process
  var project_filters = []; // Exported to the compile process
  var project_handlers = []; // Exported to the compile process
  var project_directives = []; // Exported to the compile process
  var project_controllers = []; // Exported to the compile process
  var project_less = []; // Exported to the compile process
  var project_modals = []; // Exported to the compile process

  for(var j = 0; j < config["plugins"].length; j++)
  {
    var pluginName = config["plugins"][j];
    var pluginPath = undefined;
    if(typeof pluginName != "string")
    {
      var uri = pluginName.uri || pluginName.url;
      geodash.log.debug('Plugin '+i+'.'+j+': '+uri, argv);
      if(uri.startsWith("file://"))
      {
        pluginPath = geodash.expand.home(geodash.resolve.path(path.join(uri.slice(6), "config.yml"),cwd));
      }
      else if(uri.startsWith("https://") && uri.endsWith(".git"))
      {
        var branch = pluginName.branch || pluginName.version || "master";
        var targetFolder = geodash.expand.home(geodash.resolve.path(path.join(path_cache, "plugins", path.basename(uri.slice(7)))));
        var cmd = ["git", "clone", "'"+uri+"'", "'"+path.basename(targetFolder)+"'"].join(" ");
        //execSync(cmd, {'cwd': path.dirname(targetFolder)});
        try { execSync(cmd, {'cwd': path.dirname(targetFolder), 'stdio': 'ignore'}); }
        catch(err) { geodash.log.debug(['Error on', cmd], argv); }
        var cmd = ["git", "checkout", branch].join(" ");
        try { execSync(cmd, {'cwd': targetFolder, 'stdio': 'ignore'}); }
        catch(err) { geodash.log.debug(['Error on', cmd], argv); }
        var cmd = ["git", "pull", 'origin', branch].join(" ");
        try { execSync(cmd, {'cwd': targetFolder, 'stdio': 'ignore'}); }
        catch(err) { geodash.log.debug(['Error on', cmd], argv); }
        pluginPath = geodash.expand.home(geodash.resolve.path(
          path.join(path_cache, "plugins", path.basename(uri.slice(7)), "config.yml"),
          cwd
        ));
      }
      else
      {
        pluginPath = geodash.expand.home(geodash.resolve.path(path.join(path_plugins, pluginName, "config.yml"),cwd));
      }
    }
    else
    {
      geodash.log.debug('Plugin '+i+'.'+j+': '+pluginName, argv);
      if(pluginName.startsWith("file://"))
      {
        pluginPath = geodash.expand.home(geodash.resolve.path(path.join(pluginName.slice(6), "config.yml"),cwd));
      }
      else if(pluginName.startsWith("https://") && pluginName.endsWith(".git"))
      {
        var targetFolder = geodash.expand.home(geodash.resolve.path(path.join(path_cache, "plugins", path.basename(pluginName.slice(7))),cwd));
        var cmd = ["git", "clone", "'"+pluginName+"'", "'"+path.basename(targetFolder)+"'"].join(" ");
        //execSync(cmd, {'cwd': path.dirname(targetFolder)});
        try { execSync(cmd, {'cwd': path.dirname(targetFolder), 'stdio': 'ignore'}); }//
        catch(err) { geodash.log.debug(['Error on', cmd, 'CWD', path.dirname(targetFolder)], argv); }
        pluginPath = geodash.expand.home(path.join(path_cache, "plugins", path.basename(pluginName.slice(7)), "config.yml"));
      }
      else
      {
        pluginPath = geodash.expand.home(geodash.resolve.path(path.join(path_plugins, pluginName, "config.yml"),cwd));
      }
    }

    if(pluginPath != undefined)
    {
      geodash.log.debug('Loading plugin from '+pluginPath, argv);
      var geodash_plugin = geodash.load.file(pluginPath, cwd);
      if(geodash_plugin == null || geodash_plugin == undefined)
      {
        geodash.log.error('Could not load plugin '+i+'.'+j+' '+ pluginName);
      }
      geodash_plugin["project"] = config.name;
      geodash_plugin["id"] = geodash_plugin.name || pluginName;
      geodash_meta_plugins.push(geodash_plugin);

      if(geodash_plugin["controllers"] != undefined)
      {
        for(var k = 0; k < geodash_plugin.controllers.length; k++)
        {
          var c = geodash_plugin.controllers[k];
          if(typeof c != "string")
          {
            geodash_meta_controllers.push({'name': c.name, 'handlers': c.handlers});
          }
        }
      }

      var files = geodash.collect.files_all(pluginPath, geodash_plugin, [
        "enumerations",
        "endpoints",
        "filters",
        "handlers",
        "controllers",
        "directives",
        "templates",
        "less"
      ]);

      project_enumerations = project_enumerations.concat(files["enumerations"]);
      project_endpoints = project_endpoints.concat(files["endpoints"]);
      project_schemas = project_schemas.concat(geodash.collect.objects(pluginPath, geodash_plugin, "schemas"));
      project_templates = project_templates.concat(files["templates"]);
      project_filters = project_filters.concat(files["filters"]);
      project_handlers = project_handlers.concat(files["handlers"]);
      project_directives = project_directives.concat(files["directives"]);
      project_controllers = project_controllers.concat(files["controllers"]);
      project_less = project_less.concat(files["less"]);

      if(geodash_plugin["modals"] != undefined)
      {
        for(var k = 0; k < geodash_plugin.modals.length; k++)
        {
          var m = geodash_plugin.modals[k];
          if(typeof m == "string")
          {
            project_modals.push(geodash.load.file(
              m,
              path.join(path.dirname(pluginPath), "modals")
            ));
          }
          else
          {
            project_modals.push(m);
          }
        }
      }

    }
  }

  if("dependencies" in config)
  {
    if("production" in config["dependencies"])
    {
      if("templates" in config["dependencies"]["production"])
      {
        compile_templates = compile_templates.concat(
          config["dependencies"]["production"]["templates"].map(function(x){return path.join(config.path.base, x);})
        );
      }
    }
  }

  compile_enumerations = compile_enumerations.concat(project_enumerations);
  compile_endpoints = compile_endpoints.concat(project_endpoints);
  compile_schemas = compile_schemas.concat(project_schemas);
  compile_templates = compile_templates.concat(project_templates);
  compile_filters = compile_filters.concat(project_filters);
  compile_handlers = compile_handlers.concat(project_handlers);
  compile_directives = compile_directives.concat(project_directives);
  compile_controllers = compile_controllers.concat(project_controllers);
  compile_less = compile_less.concat(project_less);
  compile_modals = compile_modals.concat(project_modals);

  if("dependencies" in config)
  {
    if("production" in config["dependencies"])
    {
      compile_js = compile_js.concat(
        config["dependencies"]["production"]["javascript"].map(function(x){return path.join(config.path.base, x);})
      );
    }
    if("test" in config["dependencies"])
    {
      test_js = test_js.concat(
        config["dependencies"]["test"]["javascript"].map(function(x){return path.join(config.path.base, x);})
      );
    }
  }

}

compile_templates = compile_templates.map(function(x, i, arr){ return geodash.resolve.path(x);});

compile_js = compile_js.concat(
    compile_enumerations,
    compile_filters,
    compile_handlers,
    compile_directives,
    compile_controllers);

test_js = test_js.concat(
    compile_enumerations,
    compile_filters,
    compile_handlers,
    compile_directives,
    compile_controllers);

variables['compile_js'] = compile_js;
variables['compile_less'] = compile_less;
variables['compile_modals'] = compile_modals;

compilelist = compilelist.concat(rootConfig["compiler"]["list"]);
compilelist = compilelist.map(function(obj){
  if(Array.isArray(obj['src']))
  {
    obj['src'] = obj['src'].map(expandHomeDir);
  }
  else
  {
    obj['src'] = geodash.expand.home(obj['src']);
  }
  obj['dest'] = geodash.expand.home(obj['dest']);
  return obj;
});

var copylist = [];

geodash.log.debug(['Compilelist built.', yaml.stringify(compilelist, 8, 2)], argv);

gulp.task('compile', ['clean', 'geodash:api', 'geodash:schema', 'geodash:templates'], function(){
    for(var i = 0; i < compilelist.length; i++)
    {
        var t = compilelist[i];
        if(argv.debug)
        {
          gutil.log(gutil.colors.magenta(t.name));
        }
        if(t.type=="js")
        {
            gulp.src(t.src, {base: './'})
                .pipe(concat(t.outfile))
                .pipe(gulp.dest(t.dest))
                .pipe(uglify())
                .pipe(rename({ extname: '.min.js'}))
                .pipe(gulp.dest(t.dest));
        }
        else if(t.type=="css")
        {
            gulp.src(t.src)
                .pipe(concat(t.outfile))
                .pipe(gulp.dest(t.dest));
        }
        else if(t.type=="less")
        {
            gulp.src(t.src, {base: './'})
                .pipe(less({paths: t.paths}))
                .pipe(concat(t.outfile))
                .pipe(gulp.dest(t.dest));
        }
        else if(t.type=="template"||t.type=="templates")
        {
            gulp.src(t.src)
                .pipe(templateCache('templates.js', {
                  templateHeader: 'geodash.templates = {static:{}};\n',
                  templateBody: 'geodash.templates.static["<%= url %>"] = "<%= contents %>";',
                  templateFooter: '\n'
                }))
                .pipe(gulp.dest(t.dest));
        }
    }
});

gulp.task('geodash:meta', ['clean'], function(cb){

  var lines = [];
  lines.push("geodash.meta = {};");
  lines.push("geodash.meta.projects = "+JSON.stringify(geodash_meta_projects)+";");
  lines.push("geodash.meta.plugins = "+JSON.stringify(geodash_meta_plugins)+";");
  lines.push("geodash.meta.controllers = "+JSON.stringify(geodash_meta_controllers)+";");
  lines.push("geodash.meta.modals = "+JSON.stringify(compile_modals)+";");
  var contents = lines.join("\n");
  geodash.log.debug(['Contents of GeoDash meta.js', contents], argv);
  if (!fs.existsSync('./build')){ fs.mkdirSync('./build'); }
  if (!fs.existsSync('./build/meta')){ fs.mkdirSync('./build/meta'); }
  fs.writeFile('./build/meta/meta.js',contents, cb);
});

gulp.task('geodash:api', ['clean'], function(cb){

  var endpoints = {};

  for(var i = 0; i < compile_endpoints.length; i++)
  {
    var plugin_endpoints = geodash.load.file(geodash.expand.home(geodash.resolve.path(compile_endpoints[i], cwd)));
    endpoints = merge(endpoints, plugin_endpoints);
  }

  if (!fs.existsSync('./build')){ fs.mkdirSync('./build'); }
  if (!fs.existsSync('./build/api')){ fs.mkdirSync('./build/api'); }

  fs.writeFile('./build/api/endpoints.yml', '---\n'+yaml.stringify(endpoints, 8, 2), cb);
});

gulp.task('geodash:schema', ['clean:schema'], function(cb)
{
  var schema = {};
  var schema_templates = {};

  // Aggregate Schema Templates
  for(var i = 0; i < compile_schemas.length; i++)
  {
    var s = compile_schemas[i];
    if(typeof s != 'string')
    {
      schema_templates[s.id] = geodash.load.file(s.path, cwd);
    }
  }

  geodash.log.debug(["Compile Schemas", JSON.stringify(compile_schemas)], argv);
  geodash.log.debug(["Schema Templates", JSON.stringify(schema_templates)], argv);

  // Build Dashboard Template
  for(var i = 0; i < compile_schemas.length; i++)
  {
    var s = compile_schemas[i];
    if(typeof s == 'string')
    {
      var plugin_schema = geodash.load.file(s, cwd);
      if(plugin_schema != undefined)
      {
        schema = merge(schema, plugin_schema);
      }
      else
      {
        geodash.log.error(["Could not load schema from location "+s+"."]);
      }
    }
  }

  var keys = Object.keys(schema);

  for(var i = 0; i < keys.length; i++)
  {
    var key = keys[i];
    if(schema[key] != undefined)
    {
      if(schema[keys[i]]['type'] == "object" || schema[keys[i]]['type'] == "objectarray")
      {
        schema[keys[i]] = geodash.expand.schema(schema[keys[i]], schema_templates);
      }
    }
    else
    {
      geodash.log.info(["No schema for key \""+key+"\"."]);
    }
  }

  //geodash.log.debug(['Schema', yaml.stringify(schema, 8, 2)]);

  if (!fs.existsSync('./build')){ fs.mkdirSync('./build'); }
  if (!fs.existsSync('./build/schema')){ fs.mkdirSync('./build/schema'); }

  fs.writeFile('./build/schema/schema.yml', '---\n'+yaml.stringify(schema, 8, 2), undefined);


  var schema2md = function(x, keyChain, depth)
  {
    var md = "";

    //md += "| ".repeat(keyChain.length)+"|\n";
    //md += "\n";

    md += ("#".repeat(2))+" "+keyChain.join(".")+"\n";
    md += "\n";
    md += "**Label:** "+x.label+"\n";
    md += "\n";
    if(x.type != undefined)
    {
      md += "**Type:** "+x.type+"\n";
      md += "\n";
    }
    md += "**Description:** _"+ x.description+"_\n";
    md += "\n";

    var options = extract("options", x);
    if(Array.isArray(options))
    {
      md += "**Options:** `"+(options.join("` , `"))+"`\n\n";
    }

    if(extract("minValue", x) != undefined && extract("maxValue", x) != undefined)
    {
      md += "**Range:** "+extract("minValue", x)+" - "+extract("maxValue", x)+"\n\n";
    }
    else if(extract("minValue", x) != undefined)
    {
      md += "**Minimum Value:** "+extract("minValue", x)+"\n\n";
    }
    else if(extract("maxValue", x) != undefined)
    {
      md += "**Minimum Value:** "+extract("minValue", x)+"\n\n";
    }

    var fields = extract("schema.fields", x);

    if(Array.isArray(fields))
    {
      var field_links = [];
      for(var i = 0; i < fields.length; i++)
      {
        var slug = (keyChain.join("")+fields[i].id).replace(".","").toLowerCase();
        field_links.push("[" + fields[i].id+"](#"+slug+")");
      }
      md += "**Fields:** "+(field_links.join(" , "))+"\n";
      md += "\n";
    }

    var examples = extract("examples", x);
    if(Array.isArray(examples))
    {
      md += "Examples:\n";
      for(var i = 0; i < examples.length; i++)
      {
        md += "\n";
        md += "```\n";
        if(x.type == "object" || x.type == "objectarray")
        {
          md += yaml.stringify(examples[i], 8, 2);
        }
        else
        {
          md += examples[i]+"\n";
        }
        md += "```\n";
      }
    }

    if(Array.isArray(fields))
    {
      for(var i = 0; i < fields.length; i++)
      {
        var field = fields[i];
        md += schema2md(field, [].concat(keyChain, [field.id]), depth+1);
      }
    }

    return md;
  };


  var schema_markdown = "";
  var keys = Object.keys(schema);
  for(var i = 0; i < keys.length; i++)
  {
    schema_markdown += schema2md(schema[keys[i]], [keys[i]], 1);
  }
  fs.writeFile('./build/schema/schema.md', schema_markdown, undefined);

  var schema_html = "";
  schema_html += '<html class="svg" lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="google" content="notranslate" /><meta http-equiv="Content-Language" content="en_US" /><title>Schema - GeoDash Viewer</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></head><body class="container-fluid"><h1>GeoDash Schema</h1>';
  schema_html += (new showdown.Converter()).makeHtml(schema_markdown);
  schema_html +"</body></html>";
  fs.writeFile('./build/schema/schema.html', schema_html, cb);

  //fs.writeFile('./build/schema/schema.json', JSON.stringify(schema), cb);
});

gulp.task('geodash:templates', ['clean'], function(){

  return gulp.src(compile_templates)
      .pipe(templateCache('templates.js', {
        templateHeader: 'geodash.templates = {static:{}};\n',
        templateBody: 'geodash.templates.static["<%= url %>"] = "<%= contents %>";',
        templateFooter: '\n'
      }))
      .pipe(gulp.dest("./build/templates/"));
});

gulp.task('compile:main.css', ['clean'], function(){
  return processBuild(rootConfig, rootConfig['build']['main.css']);
});

gulp.task('compile:polyfill.js', ['clean'], function(){
  return processBuild(rootConfig, rootConfig['build']['polyfill.js']);
});

gulp.task('compile:main.js', ['clean', 'geodash:templates'], function(){
  return processBuild(rootConfig, rootConfig['build']['main.js']);
});

gulp.task('compile:monolith.js', ['clean', 'geodash:templates', 'compile:main.js'], function(){
  return processBuild(rootConfig, rootConfig['build']['monolith.js']);
});

gulp.task('compile:monolith.min.js', ['clean', 'geodash:templates', 'compile:main.js'], function(){
  var build = rootConfig['build']['monolith.js'];
  build.minified = true;
  build.outfile = path.basename(build.outfile, path.extname(build.outfile)) + ".min.js";
  return processBuild(rootConfig, build);
});

gulp.task('publish:s3', ['compile:monolith.js'], function(){
  if(argv != undefined && (argv.publish == true || argv.publish == "true" || argv.publish == "t"))
  {
    var prefix = path.join("cdn/geodash-viewer", ""+ts);
    geodash.log.info(["Uploading to AWS S3."]);

    return gulp
      .src(["build/js/*", "build/css/*", "build/schema/*"], {base: './'})
      .pipe(s3({Bucket: "geodash", ACL: 'public-read', keyTransform: function(x){
        var s3_path = path.join(prefix, path.basename(x));
        geodash.log.info(["-- uploading "+x+" to "+s3_path+"."]);
        return s3_path;
      }},
      {
        maxRetries: 1,
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-west-1",
        httpOptions : {
          timeout: 60000
        }
      }));

      "index.html"
  }
  else
  {
    return false
  }
});

gulp.task('publish:patch', ['publish:s3'], function(){
  if(argv != undefined && (argv.publish == true || argv.publish == "true" || argv.publish == "t"))
  {
    var prefix_regex = "http:\\/\\/cdn.geodash.io\\/geodash-viewer\\/";
    var prefix_repl = "http://cdn.geodash.io/geodash-viewer/";
    return gulp.src(["index.html"], {base: './'})
      .pipe(replace(
        new RegExp(prefix_regex+"(.+)\\/geodashviewer.css", "g"),
        prefix_repl+ts+"/geodashviewer.css"
      ))
      .pipe(replace(
        new RegExp(prefix_regex+"(.+)\\/geodashviewer.full.js", "g"),
        prefix_repl+ts+"/geodashviewer.full.js"
      ))
      .pipe(replace(
        new RegExp(prefix_regex+"(.+)\\/polyfill.min.js", "g"),
        prefix_repl+ts+"/polyfill.min.js"
      ))
      .pipe(gulp.dest("./"));
  }
  else
  {
    return false
  }
});

gulp.task('copy', ['clean'], function(){
    for(var i = 0; i < copylist.length; i++)
    {
        var t = copylist[i];
        gulp.src(t.src).pipe(gulp.dest(t.dest));
    }
});

gulp.task('clean:schema', function () {
  return del(['./build/schema/**/*']);
});

gulp.task('clean', ['clean:schema'], function () {
  return del([
    './temp/**/*',
    './build/js/**/*',
    './build/css/**/*'
  ]);
});

gulp.task('test', function(){
    for(var i = 0; i < test_js.length; i++)
    {
      gulp.src(test_js[i])
          .pipe(jshint()).
          pipe(jshint.reporter('default'));
    }
});

gulp.task('default', [
  'clean',
  'copy',
  'geodash:meta',
  'geodash:api',
  'geodash:schema',
  'geodash:templates',
  'compile',
  'compile:main.css',
  'compile:polyfill.js',
  'compile:main.js',
  'compile:monolith.js',
  'compile:monolith.min.js',
  "publish:s3",
  "publish:patch"
]);


gulp.task('bootstrap:clean', function() {
    return del([
        './temp/**/*',
        (rootConfig.bootstrap.dest+'/**/*')
    ]);
});
gulp.task('bootstrap:prepareLess', ['bootstrap:clean'], function() {
    var base = rootConfig.bootstrap.src;
    return gulp.src([base+'/**', '!'+base+'/{variables.less}'])
        .pipe(gulp.dest('./temp'));
});
gulp.task('bootstrap:prepareVariables', ['bootstrap:prepareLess'], function() {
    return gulp.src(rootConfig.bootstrap.variables)
        .pipe(gulp.dest('./temp'));
});
gulp.task('bootstrap:compile', ['bootstrap:prepareVariables'], function() {
    return gulp.src('./temp/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest(rootConfig.bootstrap.dest));
});
