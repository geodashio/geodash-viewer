# GeoDash Viewer (geodash-viewer)


# Usage

This viewer is published to:

[http://viewer.geodash.io]([http://viewer.geodash.io])

You can use by passing a link to your config file via:

```
http://viewer.geodash.io?main:config=<PATH_TO_YOUR_YAML_FILE>
```

For example:

```
http://viewer.geodash.io?main:config=http://summit.geonode.org/logistics/map.yml
```

# Publishing

## Publish static files to CDN

To push the files to the CDN (AWS S3), add the `--publish` flag to the `gulp` command and load your AWS credentials as environmental variables.  For example,

```
cd ~/geodash-viewer.git/;
ACCESS_KEY_ID=<YOUR_ACCESS_KEY_HERE> SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY_HERE> gulp --s3
```

The publish tasks will push the assets to the CDN and patch `index.html`.  You'll then need to push the latest code to `gh-pages` as below to update production.

## Push Latest Master to gh-pages

Push latest code from master `branch` to `gh-pages`.

```
git push origin master:gh-pages
```
