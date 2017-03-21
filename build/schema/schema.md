## title

**Label:** Title

**Type:** markdown

**Description:** _The title of your dashboard._

## slug

**Label:** Slug

**Type:** text

**Description:** _The url for the dasboard such as http://geodash.io/dashboard/<slug>._

## description

**Label:** Description

**Type:** markdown

**Description:** _The generic description for the dashboard.  This is mostly used internally.  Use about or welcome for user descriptions._

## about

**Label:** About

**Type:** object

**Description:** _About._

**Fields:** [title](#abouttitle)

## about.title

**Label:** About / Title

**Type:** markdown

**Description:** _The title for the about modal._

## welcome

**Label:** Welcome

**Type:** object

**Description:** _Contents of welcome modal._

**Fields:** [title](#welcometitle) , [intro](#welcomeintro) , [about](#welcomeabout)

## welcome.title

**Label:** Welcome / Title

**Type:** markdown

**Description:** _The title for the welcome modal._

## welcome.intro

**Label:** Welcome / Introduction

**Type:** markdown

**Description:** _The text (in markdown) for the default intro tab of the welcome modal._

## welcome.about

**Label:** Welcome / About

**Type:** markdown

**Description:** _The text (in markdown) for the about tab of the welcome modal._

## baselayers

**Label:** Base Layers

**Type:** objectarray

**Description:** _Base layers available._

**Fields:** [id](#baselayersid) , [title](#baselayerstitle) , [description](#baselayersdescription) , [legend.label](#baselayerslegendlabel) , [source](#baselayerssource)

Examples:

```
id: osm
title: OpenStreetMap
description: 'OpenStreetMap Basemap, Standard Style'
type: tiles
source:
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  name: OpenStreetMap
tile:
  url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
```
## baselayers.id

**Label:** ID

**Type:** text

**Description:** _The id of your base layer._

Examples:

```
osm
```

```
world_blank_light
```
## baselayers.title

**Label:** Title

**Type:** text

**Description:** _The title of your base layer._

## baselayers.description

**Label:** Description

**Type:** text

**Description:** _The description of your base layer._

## baselayers.legend.label

**Label:** Legend Label

**Type:** text

**Description:** _The label for the legend._

## baselayers.source

**Label:** Source

**Type:** object

**Description:** _Source available._

**Fields:** [name](#baselayerssourcename) , [attribution](#baselayerssourceattribution) , [type](#baselayerssourcetype) , [tile.url](#baselayerssourcetileurl) , [mapbox.access_token](#baselayerssourcemapboxaccess_token) , [mapbox.layers](#baselayerssourcemapboxlayers) , [gwc.url](#baselayerssourcegwcurl) , [gwc.layers](#baselayerssourcegwclayers)

## baselayers.source.name

**Label:** Source Name

**Type:** text

**Description:** _The name of the source of your base layer._

## baselayers.source.attribution

**Label:** Source Attribution

**Type:** text

**Description:** _The attribution of the source of base layer._

## baselayers.source.type

**Label:** Source Type

**Type:** text

**Description:** _The type of the feature layer (tiles,mapbox)._

**Options:** `tiles` , `mapbox` , `gwc`

## baselayers.source.tile.url

**Label:** Tile URL

**Type:** text

**Description:** _The tile url of the source of base layer._

## baselayers.source.mapbox.access_token

**Label:** Public MapBox Access Token

**Type:** text

**Description:** _Your public MapBox access token._

## baselayers.source.mapbox.layers

**Label:** MapBox Layers

**Type:** text

**Description:** _MapBox layers_

## baselayers.source.gwc.url

**Label:** GWC URL

**Type:** text

**Description:** _GWC URL_

## baselayers.source.gwc.layers

**Label:** GWC Layers

**Type:** text

**Description:** _GWC layers_

## assets

**Label:** Assets

**Type:** objectarray

**Description:** _Known assets available.  Can be then referenced by name_

**Fields:** [id](#assetsid) , [title](#assetstitle) , [type](#assetstype) , [url](#assetsurl)

## assets.id

**Label:** ID

**Type:** text

**Description:** _The id of your asset._

## assets.title

**Label:** Title

**Type:** text

**Description:** _The title of your asset._

## assets.type

**Label:** Type

**Type:** text

**Description:** _The type of the asset (image, svg, font)._

**Options:** `image` , `svg` , `font`

## assets.url

**Label:** URL

**Type:** text

**Description:** _The url of the asset._

## featurelayers

**Label:** Available Feature Layers

**Type:** objectarray

**Description:** _Feature layers available._

**Fields:** [id](#featurelayersid) , [title](#featurelayerstitle) , [description](#featurelayersdescription) , [auth](#featurelayersauth) , [type](#featurelayerstype) , [view.minZoom](#featurelayersviewminzoom) , [view.maxZoom](#featurelayersviewmaxzoom) , [source](#featurelayerssource) , [wms](#featurelayerswms) , [wmts.layers](#featurelayerswmtslayers) , [wmts.url](#featurelayerswmtsurl) , [wfs](#featurelayerswfs) , [geojson](#featurelayersgeojson) , [tegola](#featurelayerstegola) , [carto](#featurelayerscarto) , [heatmap](#featurelayersheatmap) , [popup](#featurelayerspopup) , [metadata](#featurelayersmetadata)

## featurelayers.id

**Label:** ID

**Type:** text

**Description:** _The id of your base layer._

## featurelayers.title

**Label:** Title

**Type:** text

**Description:** _The title of your base layer._

## featurelayers.description

**Label:** Description

**Type:** text

**Description:** _The description of your base layer._

## featurelayers.auth

**Label:** Authentication

**Type:** text

**Description:** _The type of authentication for this layer._

**Options:** `none` , `basic`

## featurelayers.type

**Label:** Type

**Type:** text

**Description:** _The type of the feature layer (wms, wmts, geojson, tegola)._

**Options:** `wms` , `wmts` , `geojson` , `tegola`

## featurelayers.view.minZoom

**Label:** View / Minimum Zoom

**Type:** int

**Description:** _The maximum a user can zoom out._

**Range:** 0 - 18

Examples:

```
0
```

```
3
```
## featurelayers.view.maxZoom

**Label:** View / Maximum Zoom

**Type:** int

**Description:** _The maximum a user can zoom in._

**Range:** 0 - 18

Examples:

```
18
```
## featurelayers.source

**Label:** Source

**Type:** object

**Description:** _Source configuration._

**Fields:** [name](#featurelayerssourcename) , [attribution](#featurelayerssourceattribution) , [maxZoom](#featurelayerssourcemaxzoom)

## featurelayers.source.name

**Label:** Source / Name

**Type:** text

**Description:** _The name of the source of your feature layer._

## featurelayers.source.attribution

**Label:** Source / Attribution

**Type:** text

**Description:** _The attribution of the source of feature layer._

## featurelayers.source.maxZoom

**Label:** Source / Maximum Zoom

**Type:** int

**Description:** _The maximum zoom level provided by the source._

**Range:** 0 - 18

## featurelayers.wms

**Label:** WMS

**Type:** object

**Description:** _WMS configuration._

**Fields:** [layers](#featurelayerswmslayers) , [cql_filter](#featurelayerswmscql_filter) , [url](#featurelayerswmsurl)

Examples:

```
layers: 'geonode:wld_poi_facilities_wfp'
cql_filter: '(facility IN (''Country Office'') AND status = ''Open'')'
url: 'http://geonode.wfp.org/geoserver/wms'
```
## featurelayers.wms.layers

**Label:** WMS Layers

**Type:** text

**Description:** _The wms layers of the feature layer._

Examples:

```
geonode:wld_poi_facilities_wfp
```
## featurelayers.wms.cql_filter

**Label:** CQL Filter

**Type:** text

**Description:** _The CQL Filter to apply to the WMS GetMap requests._

Examples:

```
(facility IN (''Country Office'') AND status = ''Open'')
```
## featurelayers.wms.url

**Label:** WMS URL

**Type:** text

**Description:** _The url of the WMS server._

Examples:

```
http://geonode.wfp.org/geoserver/wms
```

```
http://geonode.state.gov/geoserver/wms
```

```
http://secondarycities.geonode.state.gov/geoserver/wms
```

```
http://mapstory.org/geoserver/wms
```
## featurelayers.wmts.layers

**Label:** WMTS Layers

**Type:** text

**Description:** _The wmts layers of the feature layer._

## featurelayers.wmts.url

**Label:** WMTS URL

**Type:** text

**Description:** _The url of the WMTS server._

## featurelayers.wfs

**Label:** WFS

**Type:** object

**Description:** _WFS configuration._

**Fields:** [layers](#featurelayerswfslayers) , [version](#featurelayerswfsversion) , [url](#featurelayerswfsurl)

## featurelayers.wfs.layers

**Label:** WFS Layers

**Type:** text

**Description:** _The wfs layers of the feature layer._

Examples:

```
geonode:wld_poi_facilities_wfp
```
## featurelayers.wfs.version

**Label:** WFS Version

**Type:** text

**Description:** _The version of the WFS server._

**Options:** `1.0.0` , `1.1.0` , `2.0` , `2.0.2`

## featurelayers.wfs.url

**Label:** WFS URL

**Type:** text

**Description:** _The url of the WFS server._

## featurelayers.geojson

**Label:** GeoJSON

**Type:** object

**Description:** _GeoJSON configuration._

**Fields:** [url](#featurelayersgeojsonurl) , [strategy](#featurelayersgeojsonstrategy) , [refresh](#featurelayersgeojsonrefresh)

## featurelayers.geojson.url

**Label:** GeoJSON URL

**Type:** text

**Description:** _The url of the geojson service/file._

Examples:

```
http://geonode.state.gov/cors/geoserver/wfs?srsName=EPSG%3A4326&typename=geonode%3ASyria_CulturalSites_2013May22_HIU_USDoS&outputFormat=json&version=1.0.0&service=WFS&request=GetFeature
```
## featurelayers.geojson.strategy

**Label:** GeoJSON Loading Strategy

**Type:** text

**Description:** _The loading strategy for the layer. For OL3, see [http://openlayers.org/en/latest/apidoc/ol.loadingstrategy.html](http://openlayers.org/en/latest/apidoc/ol.loadingstrategy.html)._

**Options:** `all` , `bbox` , `tile`

## featurelayers.geojson.refresh

**Label:** GeoJSON Refresh

**Type:** boolean

**Description:** _Whether to refresh to layer on application-specific event (e.g., movend, redo search for area, etc.)_

## featurelayers.tegola

**Label:** Tegola

**Type:** object

**Description:** _Tegola configuration._

**Fields:** [map](#featurelayerstegolamap) , [url](#featurelayerstegolaurl) , [debug](#featurelayerstegoladebug)

## featurelayers.tegola.map

**Label:** Map

**Type:** text

**Description:** _The tegola map to show._

Examples:

```
zoning
```
## featurelayers.tegola.url

**Label:** Tegola Server URL

**Type:** text

**Description:** _The url of the tegola server._

Examples:

```
http://localhost:8080
```
## featurelayers.tegola.debug

**Label:** Debug

**Type:** boolean

**Description:** _Debug.  If yes, will return border of each tile as vectors._

## featurelayers.carto

**Label:** Cartography

**Type:** object

**Description:** _Cartography (styles, etc.)._

**Fields:** [styles](#featurelayerscartostyles)

## featurelayers.carto.styles

**Label:** Styles

**Type:** objectarray

**Description:** _styles_

**Fields:** [id](#featurelayerscartostylesid) , [title](#featurelayerscartostylestitle) , [description](#featurelayerscartostylesdescription) , [legend](#featurelayerscartostyleslegend) , [symbolizers](#featurelayerscartostylessymbolizers)

## featurelayers.carto.styles.id

**Label:** Style ID

**Type:** text

**Description:** _The id of the style._

## featurelayers.carto.styles.title

**Label:** Style Title

**Type:** text

**Description:** _The title of the style._

## featurelayers.carto.styles.description

**Label:** Style Description

**Type:** text

**Description:** _The description of the style._

## featurelayers.carto.styles.legend

**Label:** Legend

**Type:** object

**Description:** _Legend_

**Fields:** [type](#featurelayerscartostyleslegendtype)

## featurelayers.carto.styles.legend.type

**Label:** Legend type

**Type:** text

**Description:** _type_

**Options:** `default` , `graduated`

## featurelayers.carto.styles.symbolizers

**Label:** Symbolizers

**Type:** objectarray

**Description:** _symbolizers_

**Fields:** [id](#featurelayerscartostylessymbolizersid) , [title](#featurelayerscartostylessymbolizerstitle) , [type](#featurelayerscartostylessymbolizerstype) , [static](#featurelayerscartostylessymbolizersstatic) , [transform](#featurelayerscartostylessymbolizerstransform) , [dynamic](#featurelayerscartostylessymbolizersdynamic)

## featurelayers.carto.styles.symbolizers.id

**Label:** Symbolizer ID

**Type:** text

**Description:** _The id of the symbolizer._

## featurelayers.carto.styles.symbolizers.title

**Label:** Symbolizer Title

**Type:** text

**Description:** _The title of the symbolizer._

## featurelayers.carto.styles.symbolizers.type

**Label:** Symbolizer Type

**Type:** text

**Description:** _The type of the symbolizer._

**Options:** `point` , `line` , `polygon`

## featurelayers.carto.styles.symbolizers.static

**Label:** Symbolizer Static

**Type:** object

**Description:** _Symbolizer Static_

**Fields:** [properties](#featurelayerscartostylessymbolizersstaticproperties)

## featurelayers.carto.styles.symbolizers.static.properties

**Label:** Symbolizer Static Properties

**Type:** objectarray

**Description:** _properties_

**Fields:** [name](#featurelayerscartostylessymbolizersstaticpropertiesname) , [value](#featurelayerscartostylessymbolizersstaticpropertiesvalue)

## featurelayers.carto.styles.symbolizers.static.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

**Options:** `radius` , `fillColor` , `fillOpacity` , `strokeWidth` , `strokeColor` , `strokeOpacity` , `textAlign` , `textBaseline` , `textCode` , `textColor` , `textContent` , `textFont`

## featurelayers.carto.styles.symbolizers.static.properties.value

**Label:** Property value

**Type:** text

**Description:** _The value of the property._

## featurelayers.carto.styles.symbolizers.transform

**Label:** Symbolizer Tranform

**Type:** object

**Description:** _Symbolizer Transform_

**Fields:** [operations](#featurelayerscartostylessymbolizerstransformoperations)

## featurelayers.carto.styles.symbolizers.transform.operations

**Label:** Symbolizer Transform Operations

**Type:** objectarray

**Description:** _operations_

**Fields:** [name](#featurelayerscartostylessymbolizerstransformoperationsname) , [properties](#featurelayerscartostylessymbolizerstransformoperationsproperties)

## featurelayers.carto.styles.symbolizers.transform.operations.name

**Label:** Operation Name

**Type:** text

**Description:** _The name of the operation._

**Options:** `buffer`

## featurelayers.carto.styles.symbolizers.transform.operations.properties

**Label:** Operation Properties

**Type:** objectarray

**Description:** _properties_

**Fields:** [name](#featurelayerscartostylessymbolizerstransformoperationspropertiesname) , [value](#featurelayerscartostylessymbolizerstransformoperationspropertiesvalue)

## featurelayers.carto.styles.symbolizers.transform.operations.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

Examples:

```
distance
```
## featurelayers.carto.styles.symbolizers.transform.operations.properties.value

**Label:** Property value

**Type:** text

**Description:** _The value of the property.  If starts with $, then dereferences feature attribute by name, otherwise treated as a literal value._

Examples:

```
1000
```

```
$accuracy
```
## featurelayers.carto.styles.symbolizers.dynamic

**Label:** Symbolizer Dynamic

**Type:** object

**Description:** _Symbolizer Dynamic_

**Fields:** [func](#featurelayerscartostylessymbolizersdynamicfunc)

## featurelayers.carto.styles.symbolizers.dynamic.func

**Label:** Symbolizer Dynamic Function Name

**Type:** template

**Description:** _Symbolizer Dynamic Function Name_

## featurelayers.heatmap

**Label:** Heatmap

**Type:** object

**Description:** _Heatmap configuration._

**Fields:** [blur](#featurelayersheatmapblur) , [radius](#featurelayersheatmapradius) , [weight](#featurelayersheatmapweight)

## featurelayers.heatmap.blur

**Label:** Heatmap Blur

**Type:** int

**Description:** _heatmap blur_

Examples:

```
15
```
## featurelayers.heatmap.radius

**Label:** Heatmap Radius

**Type:** int

**Description:** _heatmap radius_

Examples:

```
5
```
## featurelayers.heatmap.weight

**Label:** Heatmap Weight Attribute

**Type:** text

**Description:** _Name of the attribute that is used as the weight. If not included, everything is given weight of 1._

## featurelayers.popup

**Label:** Popup

**Type:** object

**Description:** _Popup displayed when clicked on map._

**Fields:** [title](#featurelayerspopuptitle) , [maxWidth](#featurelayerspopupmaxwidth) , [panes](#featurelayerspopuppanes)

## featurelayers.popup.title

**Label:** Popup Title

**Type:** text

**Description:** _The title of the layer's popup.  Can use angular variables and filters._

Examples:

```
Airport
```

```
Airport: {{ feature.attributes.name }}
```

```
{{ feature.attributes.name }}
```
## featurelayers.popup.maxWidth

**Label:** Popup Maximum Width

**Type:** text

**Description:** _The maximum width of the layer's popup._

## featurelayers.popup.panes

**Label:** Panes

**Type:** objectarray

**Description:** _Panes_

**Fields:** [id](#featurelayerspopuppanesid) , [tab.label](#featurelayerspopuppanestablabel) , [fields](#featurelayerspopuppanesfields)

## featurelayers.popup.panes.id

**Label:** Pane ID

**Type:** text

**Description:** _The id of the pane._

Examples:

```
overview
```

```
location
```

```
status
```
## featurelayers.popup.panes.tab.label

**Label:** Tab Label

**Type:** text

**Description:** _The label of the pane's tab._

Examples:

```
Overview
```

```
Location
```

```
Status
```
## featurelayers.popup.panes.fields

**Label:** Fields

**Type:** objectarray

**Description:** _Fields_

**Fields:** [type](#featurelayerspopuppanesfieldstype) , [attribute](#featurelayerspopuppanesfieldsattribute) , [inputs](#featurelayerspopuppanesfieldsinputs) , [value](#featurelayerspopuppanesfieldsvalue) , [url](#featurelayerspopuppanesfieldsurl) , [label](#featurelayerspopuppanesfieldslabel) , [when](#featurelayerspopuppanesfieldswhen)

## featurelayers.popup.panes.fields.type

**Label:** Type

**Type:** text

**Description:** _Type (text, link)._

**Options:** `text` , `template` , `link` , `date`

## featurelayers.popup.panes.fields.attribute

**Label:** Field Attribute

**Type:** text

**Description:** _The attribute name.  Used for testing defined and requesting attributes for WFS layers.  When no value property is set, then shows raw value in popup._

Examples:

```
name
```

```
status
```

```
location
```

```
owner
```
## featurelayers.popup.panes.fields.inputs

**Label:** Inputs

**Type:** stringarray

**Description:** _Will coalesce when provided with multiple attribute names._

Examples:

```
namelong,nameshrt,name,id
```
## featurelayers.popup.panes.fields.value

**Label:** Value

**Type:** template

**Description:** _Custom value to show._

## featurelayers.popup.panes.fields.url

**Label:** URL

**Type:** template

**Description:** _When you want to hyperlink the value field._

Examples:

```
https://www.openstreetmap.org/#map=15/{{ feature.geometry.lat }}/{{ feature.geometry.lon }}
```
## featurelayers.popup.panes.fields.label

**Label:** Field Label

**Type:** template

**Description:** _The label of the field._

## featurelayers.popup.panes.fields.when

**Label:** Field When

**Type:** text

**Description:** _When to display the field (always, defined, etc.)._

**Options:** `always` , `defined`

## featurelayers.metadata

**Label:** Metadata

**Type:** object

**Description:** _Metadata (keywords, etc.)._

**Fields:** [keywords](#featurelayersmetadatakeywords)

## featurelayers.metadata.keywords

**Label:** Keywords

**Type:** stringarray

**Description:** _Keywords_

## controls

**Label:** undefined

**Description:** _undefined_

## view

**Label:** undefined

**Description:** _undefined_

## renderlayers

**Label:** Render Layers

**Type:** stringarray

**Description:** _The layers in stack order to render; the first is on top; the last is on the bottom._

## servers

**Label:** Servers

**Type:** objectarray

**Description:** _Known servers available._

**Fields:** [id](#serversid) , [title](#serverstitle) , [description](#serversdescription) , [type](#serverstype) , [wms](#serverswms) , [wfs](#serverswfs) , [tegola](#serverstegola)

## servers.id

**Label:** ID

**Type:** text

**Description:** _The id of your server._

## servers.title

**Label:** Title

**Type:** text

**Description:** _The title of your server._

## servers.description

**Label:** Description

**Type:** text

**Description:** _The description of your server._

## servers.type

**Label:** Type

**Type:** text

**Description:** _The type of the server (wms, mapbox, tegola)._

**Options:** `wms` , `mapbox` , `tegola`

## servers.wms

**Label:** WMS

**Type:** object

**Description:** _WMS configuration._

**Fields:** [url](#serverswmsurl)

## servers.wms.url

**Label:** WMS URL

**Type:** text

**Description:** _The url of the WMS server._

## servers.wfs

**Label:** WFS

**Type:** object

**Description:** _WFS configuration._

**Fields:** [version](#serverswfsversion) , [url](#serverswfsurl)

## servers.wfs.version

**Label:** WFS Version

**Type:** text

**Description:** _The version of the WFS server._

**Options:** `1.0.0` , `1.1.0` , `2.0` , `2.0.2`

## servers.wfs.url

**Label:** WFS URL

**Type:** text

**Description:** _The url of the WFS server._

## servers.tegola

**Label:** Tegola

**Type:** object

**Description:** _Tegola configuration._

**Fields:** [url](#serverstegolaurl)

## servers.tegola.url

**Label:** Tegola URL

**Type:** text

**Description:** _The url of the Tegola server._

## pages

**Label:** Pages

**Type:** objectarray

**Description:** _Pages.  Used for templating links to this and other systems._

**Fields:** [id](#pagesid) , [url](#pagesurl)

## pages.id

**Label:** ID

**Type:** text

**Description:** _The id of your page._

## pages.url

**Label:** URL

**Type:** text

**Description:** _The url of your page.  Can use Angular interpolation and filters._

## legend

**Label:** Legend

**Type:** object

**Description:** _Legend_

**Fields:** [position](#legendposition) , [width](#legendwidth) , [height](#legendheight) , [grid](#legendgrid) , [css](#legendcss)

## legend.position

**Label:** Position

**Type:** object

**Description:** _Position of the legend._

**Fields:** [top](#legendpositiontop) , [bottom](#legendpositionbottom) , [left](#legendpositionleft) , [right](#legendpositionright)

## legend.position.top

**Label:** Position / Top

**Type:** text

**Description:** _The top position of the legend (in pixels or percentage)._

## legend.position.bottom

**Label:** Position / Bottom

**Type:** text

**Description:** _The bottom position of the legend (in pixels or percentage)._

## legend.position.left

**Label:** Position / Left

**Type:** text

**Description:** _The left position of the legend (in pixels or percentage)._

## legend.position.right

**Label:** Position / Right

**Type:** text

**Description:** _The right position of the legend (in pixels or percentage)._

## legend.width

**Label:** Width

**Type:** text

**Description:** _The width of the legend (in pixels or percentage)._

## legend.height

**Label:** Height

**Type:** text

**Description:** _The height of the legend (in pixels or percentage)._

## legend.grid

**Label:** Grid

**Type:** stringarray

**Description:** _The classes of the grid.  First value is for the left.  Second is for the right.  You can use bootstrap classes._

## legend.css

**Label:** CSS

**Type:** object

**Description:** _Additional CSS for the legend._

**Fields:** [properties](#legendcssproperties)

## legend.css.properties

**Label:** Legend Additional CSS Properties

**Type:** objectarray

**Description:** _The additional css properties of the legend, such as margin, padding, border, etc._

**Fields:** [name](#legendcsspropertiesname) , [value](#legendcsspropertiesvalue)

## legend.css.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## legend.css.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

## overlays

**Label:** Static Overlays

**Type:** objectarray

**Description:** _Static Overlays available._

**Fields:** [id](#overlaysid) , [type](#overlaystype) , [position](#overlaysposition) , [width](#overlayswidth) , [height](#overlaysheight) , [css](#overlayscss) , [tooltip](#overlaystooltip) , [text](#overlaystext) , [image](#overlaysimage) , [link](#overlayslink) , [intents](#overlaysintents)

## overlays.id

**Label:** ID

**Type:** text

**Description:** _The id of your navbar._

## overlays.type

**Label:** Type

**Type:** text

**Description:** _The type of your static overlay (text or image)._

**Options:** `text` , `image`

## overlays.position

**Label:** Position

**Type:** object

**Description:** _Position of the overlay._

**Fields:** [top](#overlayspositiontop) , [bottom](#overlayspositionbottom) , [left](#overlayspositionleft) , [right](#overlayspositionright)

## overlays.position.top

**Label:** Position / Top

**Type:** text

**Description:** _The top position of your static overlayer (in pixels or percentage)._

## overlays.position.bottom

**Label:** Position / Bottom

**Type:** text

**Description:** _The bottom position of your static overlayer (in pixels or percentage)._

## overlays.position.left

**Label:** Position / Left

**Type:** text

**Description:** _The left position of your static overlayer (in pixels or percentage)._

## overlays.position.right

**Label:** Position / Right

**Type:** text

**Description:** _The right position of your static overlayer (in pixels or percentage)._

## overlays.width

**Label:** Width

**Type:** text

**Description:** _The width of your static overlayer (in pixels or percentage)._

## overlays.height

**Label:** Height

**Type:** text

**Description:** _The height of your static overlayer (in pixels or percentage)._

## overlays.css

**Label:** CSS

**Type:** object

**Description:** _Additional CSS for each tab wrapper._

**Fields:** [classes](#overlayscssclasses) , [properties](#overlayscssproperties)

## overlays.css.classes

**Label:** Classes

**Type:** stringarray

**Description:** _The additional css classes of the intent, such as text-primary, etc.  You can use Bootstrap 4 [color utility classes](https://v4-alpha.getbootstrap.com/utilities/colors/)._

Examples:

```
text-primary
```

```
text-danger
```

```
bg-inverse
```

```
pop
```
## overlays.css.properties

**Label:** Intent Additional CSS Properties

**Type:** objectarray

**Description:** _The additional css properties of the intent, such as margin, padding, border, etc._

**Fields:** [name](#overlayscsspropertiesname) , [value](#overlayscsspropertiesvalue)

## overlays.css.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## overlays.css.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

## overlays.tooltip

**Label:** Tooltip

**Type:** object

**Description:** _Toolip for the navbar._

**Fields:** [content](#overlaystooltipcontent) , [container](#overlaystooltipcontainer) , [placement](#overlaystooltipplacement)

## overlays.tooltip.content

**Label:** Tooltip / Content

**Type:** template

**Description:** _The content of the tooltip._

## overlays.tooltip.container

**Label:** Tooltip / Container

**Type:** text

**Description:** _The container of the tooltip._

Examples:

```
body
```

```
#geodash-map-navbars
```
## overlays.tooltip.placement

**Label:** Tooltip / Placement

**Type:** text

**Description:** _The placement of the tooltip._

**Options:** `top` , `left` , `bottom` , `right`

## overlays.text

**Label:** Text

**Type:** object

**Description:** _Text of the overlay._

**Fields:** [content](#overlaystextcontent) , [font.family](#overlaystextfontfamily) , [font.size](#overlaystextfontsize) , [font.style](#overlaystextfontstyle) , [shadow](#overlaystextshadow)

## overlays.text.content

**Label:** Text Content

**Type:** text

**Description:** _The text of your static overlayer._

## overlays.text.font.family

**Label:** Text Font Family

**Type:** text

**Description:** _The font family of your text in your static overlayer._

**Options:** `Arial` , `Open Sans` , `Verdana` , `Impact`

## overlays.text.font.size

**Label:** Text Font Size

**Type:** text

**Description:** _The font size of your text in your static overlayer._

## overlays.text.font.style

**Label:** Text Font Style

**Type:** text

**Description:** _The font style of your text in your static overlayer._

**Options:** `normal` , `italic` , `oblique` , `initial` , `inherit`

## overlays.text.shadow

**Label:** Text Shadow

**Type:** text

**Description:** _The text-shadow to apply to your static overlayer._

## overlays.image

**Label:** Image

**Type:** object

**Description:** _Image for the overlay._

**Fields:** [asset](#overlaysimageasset) , [url](#overlaysimageurl)

## overlays.image.asset

**Label:** Image Asset ID

**Type:** text

**Description:** _The id of the image asset._

## overlays.image.url

**Label:** Image Url

**Type:** text

**Description:** _The URL of your image static overlayer._

## overlays.link

**Label:** Link

**Type:** object

**Description:** _Link for each tab._

**Fields:** [url](#overlayslinkurl) , [target](#overlayslinktarget)

## overlays.link.url

**Label:** Link URL

**Type:** text

**Description:** _The destination of the link activated on user click._

## overlays.link.target

**Label:** Link Target

**Type:** text

**Description:** _The target of the link._

**Options:** `_blank` , `_self` , `_parent` , `_top`

## overlays.intents

**Label:** Intents

**Type:** objectarray

**Description:** _Intent for each tab._

**Fields:** [name](#overlaysintentsname) , [properties](#overlaysintentsproperties)

## overlays.intents.name

**Label:** Intent Name

**Type:** text

**Description:** _The intent to emit._

## overlays.intents.properties

**Label:** Intent Properties

**Type:** objectarray

**Description:** _The properties of the intent, such as layer id, location, etc._

**Fields:** [name](#overlaysintentspropertiesname) , [value](#overlaysintentspropertiesvalue)

## overlays.intents.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## overlays.intents.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

## navbars

**Label:** Navbars

**Type:** objectarray

**Description:** _Navbars_

**Fields:** [id](#navbarsid) , [placement](#navbarsplacement) , [page](#navbarspage) , [link](#navbarslink) , [intents](#navbarsintents) , [css](#navbarscss) , [markdown](#navbarsmarkdown) , [tabs](#navbarstabs)

## navbars.id

**Label:** ID

**Type:** text

**Description:** _The id of your static overlay._

## navbars.placement

**Label:** Placement

**Type:** text

**Description:** _Placement for the navbar._

**Options:** `top` , `left` , `bottom` , `right`

## navbars.page

**Label:** Page

**Type:** text

**Description:** _The page (in geodash.pages array) for permalinking each tab._

## navbars.link

**Label:** Link

**Type:** object

**Description:** _Link for each tab._

**Fields:** [url](#navbarslinkurl) , [target](#navbarslinktarget)

## navbars.link.url

**Label:** Link URL

**Type:** text

**Description:** _The destination of the link activated on user click._

## navbars.link.target

**Label:** Link Target

**Type:** text

**Description:** _The target of the link._

**Options:** `_blank` , `_self` , `_parent` , `_top`

## navbars.intents

**Label:** Intents

**Type:** objectarray

**Description:** _Intent for each tab._

**Fields:** [name](#navbarsintentsname) , [properties](#navbarsintentsproperties)

## navbars.intents.name

**Label:** Intent Name

**Type:** text

**Description:** _The intent to emit._

## navbars.intents.properties

**Label:** Intent Properties

**Type:** objectarray

**Description:** _The properties of the intent, such as layer id, location, etc._

**Fields:** [name](#navbarsintentspropertiesname) , [value](#navbarsintentspropertiesvalue)

## navbars.intents.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## navbars.intents.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

## navbars.css

**Label:** CSS

**Type:** object

**Description:** _Additional CSS for each tab wrapper._

**Fields:** [classes](#navbarscssclasses) , [properties](#navbarscssproperties)

## navbars.css.classes

**Label:** Classes

**Type:** stringarray

**Description:** _The additional css classes of the intent, such as text-primary, etc.  You can use Bootstrap 4 [color utility classes](https://v4-alpha.getbootstrap.com/utilities/colors/)._

Examples:

```
text-primary
```

```
text-danger
```

```
bg-inverse
```

```
pop
```
## navbars.css.properties

**Label:** Intent Additional CSS Properties

**Type:** objectarray

**Description:** _The additional css properties of the intent, such as margin, padding, border, etc._

**Fields:** [name](#navbarscsspropertiesname) , [value](#navbarscsspropertiesvalue)

## navbars.css.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## navbars.css.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

## navbars.markdown

**Label:** Markdown

**Type:** text

**Description:** _Whether to treat tab titles as markdown.  Defaults to true._

## navbars.tabs

**Label:** Tabs

**Type:** objectarray

**Description:** _The tabs to show in the navbar_

**Fields:** [value](#navbarstabsvalue) , [title](#navbarstabstitle) , [tooltip](#navbarstabstooltip) , [css](#navbarstabscss) , [wrapper](#navbarstabswrapper)

## navbars.tabs.value

**Label:** Tab Value

**Type:** text

**Description:** _The value of the tab._

## navbars.tabs.title

**Label:** Tab Title

**Type:** template

**Description:** _The title of the tab._

## navbars.tabs.tooltip

**Label:** Tooltip

**Type:** object

**Description:** _Toolip for the navbar._

**Fields:** [content](#navbarstabstooltipcontent) , [container](#navbarstabstooltipcontainer) , [placement](#navbarstabstooltipplacement)

## navbars.tabs.tooltip.content

**Label:** Tooltip / Content

**Type:** template

**Description:** _The content of the tooltip._

## navbars.tabs.tooltip.container

**Label:** Tooltip / Container

**Type:** text

**Description:** _The container of the tooltip._

Examples:

```
body
```

```
#geodash-map-navbars
```
## navbars.tabs.tooltip.placement

**Label:** Tooltip / Placement

**Type:** text

**Description:** _The placement of the tooltip._

**Options:** `top` , `left` , `bottom` , `right`

## navbars.tabs.css

**Label:** CSS

**Type:** object

**Description:** _Additional CSS for each tab wrapper._

**Fields:** [classes](#navbarstabscssclasses) , [properties](#navbarstabscssproperties)

## navbars.tabs.css.classes

**Label:** Classes

**Type:** stringarray

**Description:** _The additional css classes of the intent, such as text-primary, etc.  You can use Bootstrap 4 [color utility classes](https://v4-alpha.getbootstrap.com/utilities/colors/)._

Examples:

```
text-primary
```

```
text-danger
```

```
bg-inverse
```

```
pop
```
## navbars.tabs.css.properties

**Label:** Intent Additional CSS Properties

**Type:** objectarray

**Description:** _The additional css properties of the intent, such as margin, padding, border, etc._

**Fields:** [name](#navbarstabscsspropertiesname) , [value](#navbarstabscsspropertiesvalue)

## navbars.tabs.css.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## navbars.tabs.css.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

## navbars.tabs.wrapper

**Label:** Tab Wrapper

**Type:** object

**Description:** _Tab wrapper_

**Fields:** [css](#navbarstabswrappercss)

## navbars.tabs.wrapper.css

**Label:** CSS

**Type:** object

**Description:** _Additional CSS for each tab wrapper._

**Fields:** [classes](#navbarstabswrappercssclasses) , [properties](#navbarstabswrappercssproperties)

## navbars.tabs.wrapper.css.classes

**Label:** Classes

**Type:** stringarray

**Description:** _The additional css classes of the intent, such as text-primary, etc.  You can use Bootstrap 4 [color utility classes](https://v4-alpha.getbootstrap.com/utilities/colors/)._

Examples:

```
text-primary
```

```
text-danger
```

```
bg-inverse
```

```
pop
```
## navbars.tabs.wrapper.css.properties

**Label:** Intent Additional CSS Properties

**Type:** objectarray

**Description:** _The additional css properties of the intent, such as margin, padding, border, etc._

**Fields:** [name](#navbarstabswrappercsspropertiesname) , [value](#navbarstabswrappercsspropertiesvalue)

## navbars.tabs.wrapper.css.properties.name

**Label:** Property Name

**Type:** text

**Description:** _The name of the property._

## navbars.tabs.wrapper.css.properties.value

**Label:** Property value

**Type:** template

**Description:** _The value of the property._

