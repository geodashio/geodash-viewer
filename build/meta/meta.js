geodash.meta = {};
geodash.meta.projects = [{"name":"geodash","version":"0.0.1","description":"geodash 0.0.1"},{"name":"geodashviewer","version":"0.0.1","description":"GeoDash Viewer 1.x"}];
geodash.meta.plugins = [{"controllers":["GeoDashControllerBase.js","GeoDashControllerModal.js"],"directives":["svg/ngSvgText.js","svg/svg.js","geodashBase.js","onLinkDone.js","onRepeatDone.js","geodashBtnClose.js","geodashBtnInfo.js","geodashBtn.js","geodashLabel.js","geodashTab.js","geodashTabs.js"],"enumerations":["dates.js"],"templates":["geodash_tab.tpl.html","geodash_tabs.tpl.html","geodash_btn_close.tpl.html","geodash_btn_info.tpl.html","geodash_btn.tpl.html","geodash_label.tpl.html"],"filters":[],"handlers":[],"schemas":["base.yml","baselayers.yml","assets.yml","featurelayers.yml","controls.yml","view.yml","servers.yml","pages.yml",{"id":"css","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/css.yml"},{"id":"link","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/link.yml"},{"id":"intent","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/intent.yml"},{"id":"intents","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/intents.yml"},{"id":"placement","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/placement.yml"},{"id":"position","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/position.yml"},{"id":"tooltip","path":"/home/vagrant/geodash-base.git/.cache/plugins/geodash-plugin-base.git/schemas/lib/tooltip.yml"}],"modals":[],"less":["base.less"],"project":"geodash","id":{"version":"master","url":"https://github.com/geodashio/geodash-plugin-base.git"}},{"name":"geodash-plugin-handlers","controllers":[],"directives":[],"enumerations":[],"templates":[],"filters":[],"handlers":["clickedOnMap.js","filterChanged.js","hideLayer.js","hideLayers.js","layerLoaded.js","requestToggleComponent.js","selectStyle.js","showLayer.js","showLayers.js","stateChanged.js","switchBaseLayer.js","ol3/toggleComponent.js","toggleFeatureLayer.js","toggleControl.js","viewChanged.js","zoomIn.js","zoomOut.js","zoomToLayer.js","zoomToLocation.js","flyToExtent.js","flyToLocation.js","flyToCurrentLocation.js","ol3/printMap.js","ol3/toggleFullScreen.js"],"schemas":[],"modals":[],"less":[],"project":"geodash","id":"geodash-plugin-handlers"},{"name":"geodash-plugin-filters","filters":["default.js","percent.js","tabLabel.js","as_float.js","add.js","title.js","as_array.js","sortItemsByArray.js","breakpoint.js","breakpoints.js","position_x.js","width_x.js","length.js","layer_is_visible.js","common/append.js","common/default_if_undefined.js","common/default_if_undefined_or_blank.js","common/extract.js","common/extractTest.js","common/inArray.js","common/not.js","common/prepend.js","common/parseTrue.js","common/ternary.js","common/ternary_defined.js","common/yaml.js","array/arrayToObject.js","array/join.js","array/first.js","array/last.js","array/choose.js","css/css.js","css/ellipsis.js","format/formatBreakPoint.js","format/formatFloat.js","format/formatInteger.js","format/formatArray.js","format/formatMonth.js","math/eq.js","math/lte.js","math/gte.js","math/gt.js","string/replace.js","string/split.js","string/stringToObject.js","string/md2html.js","url/url_shapefile.js","url/url_geojson.js","url/url_kml.js","url/url_describefeaturetype.js"],"project":"geodash","id":"geodash-plugin-filters"},{"name":"geodash-plugin-legend","controllers":["GeoDashControllerLegend.js"],"directives":["geodashMapLegend.js"],"templates":["map_legend.tpl.html"],"less":["legend.less"],"schemas":["legend.yml"],"project":"geodash","id":"geodash-plugin-legend"},{"controllers":[],"directives":["geodashModalWelcome.js"],"templates":["modal/geodash_modal_welcome.tpl.html"],"project":"geodash","id":"welcome"},{"controllers":[],"directives":["geodashModalAbout.js"],"templates":["geodash_modal_about.tpl.html"],"project":"geodash","id":"about"},{"controllers":[],"directives":["geodashModalDownload.js"],"templates":["geodash_modal_download.tpl.html"],"project":"geodash","id":"download"},{"name":"geodash-plugin-overlays","controllers":["GeoDashControllerOverlays.js"],"directives":["geodashMapOverlays.js"],"templates":["map_overlays.tpl.html"],"less":["map_overlays.less"],"schemas":["map_overlays_schema.yml"],"project":"geodash","id":"geodash-plugin-overlays"},{"name":"geodash-plugin-navbars","controllers":["GeoDashControllerMapNavbars.js"],"directives":["geodashMapNavbars.js"],"templates":["map_navbars.tpl.html"],"less":["map_navbars.less"],"schemas":["map_navbars.yml"],"project":"geodash","id":"geodash-plugin-navbars"},{"controllers":[],"directives":["geodashSidebarToggleLeft.js"],"templates":["geodash_sidebar_toggle_left.tpl.html"],"project":"geodash","id":"sidebar_toggle_left"},{"controllers":[],"directives":["geodashSidebarToggleRight.js"],"templates":["geodash_sidebar_toggle_right.tpl.html"],"project":"geodash","id":"sidebar_toggle_right"},{"name":"geodash-plugin-map-map","controllers":[{"name":"GeoDashControllerMapMap","path":"GeoDashControllerMapMap.js","handlers":[{"event":"toggleComponent","handler":"toggleComponent"}]}],"directives":["geodashMapMap.js"],"templates":["map_map.tpl.html"],"less":["map_map.less"],"project":"geodashviewer","id":"geodash-plugin-map-map"},{"name":"geodash-plugin-main","controllers":[{"name":"GeoDashControllerMain","path":"GeoDashControllerMain.js","handlers":[{"event":"clickedOnMap","handler":"clickedOnMap"},{"event":"filterChanged","handler":"filterChanged"},{"event":"hideLayer","handler":"hideLayer"},{"event":"hideLayers","handler":"hideLayers"},{"event":"layerLoaded","handler":"layerLoaded"},{"event":"requestToggleComponent","handler":"requestToggleComponent"},{"event":"selectStyle","handler":"selectStyle"},{"event":"showLayer","handler":"showLayer"},{"event":"showLayers","handler":"showLayers"},{"event":"stateChanged","handler":"stateChanged"},{"event":"switchBaseLayer","handler":"switchBaseLayer"},{"event":"viewChanged","handler":"viewChanged"},{"event":"zoomIn","handler":"zoomIn"},{"event":"zoomOut","handler":"zoomOut"},{"event":"zoomToLayer","handler":"zoomToLayer"},{"event":"zoomToLocation","handler":"zoomToLocation"},{"event":"flyToLocation","handler":"flyToLocation"},{"event":"flyToCurrentLocation","handler":"flyToCurrentLocation"},{"event":"flyToExtent","handler":"flyToExtent"},{"event":"printMap","handler":"printMap"},{"event":"toggleFullScreen","handler":"toggleFullScreen"},{"event":"toggleFeatureLayer","handler":"toggleFeatureLayer"},{"event":"toggleControl","handler":"toggleControl"}]}],"directives":["geodashMain.js","geodashMap.js"],"templates":["main.tpl.html"],"handlers":[],"project":"geodashviewer","id":"geodash-plugin-main"}];
geodash.meta.controllers = [{"name":"GeoDashControllerMapMap","handlers":[{"event":"toggleComponent","handler":"toggleComponent"}]},{"name":"GeoDashControllerMain","handlers":[{"event":"clickedOnMap","handler":"clickedOnMap"},{"event":"filterChanged","handler":"filterChanged"},{"event":"hideLayer","handler":"hideLayer"},{"event":"hideLayers","handler":"hideLayers"},{"event":"layerLoaded","handler":"layerLoaded"},{"event":"requestToggleComponent","handler":"requestToggleComponent"},{"event":"selectStyle","handler":"selectStyle"},{"event":"showLayer","handler":"showLayer"},{"event":"showLayers","handler":"showLayers"},{"event":"stateChanged","handler":"stateChanged"},{"event":"switchBaseLayer","handler":"switchBaseLayer"},{"event":"viewChanged","handler":"viewChanged"},{"event":"zoomIn","handler":"zoomIn"},{"event":"zoomOut","handler":"zoomOut"},{"event":"zoomToLayer","handler":"zoomToLayer"},{"event":"zoomToLocation","handler":"zoomToLocation"},{"event":"flyToLocation","handler":"flyToLocation"},{"event":"flyToCurrentLocation","handler":"flyToCurrentLocation"},{"event":"flyToExtent","handler":"flyToExtent"},{"event":"printMap","handler":"printMap"},{"event":"toggleFullScreen","handler":"toggleFullScreen"},{"event":"toggleFeatureLayer","handler":"toggleFeatureLayer"},{"event":"toggleControl","handler":"toggleControl"}]}];
geodash.meta.modals = [];