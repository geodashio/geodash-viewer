geodash.config = {
  "click_radius": 2.0,
  "search": {
    "datasets": [geodash.typeahead.datasets],
    "codecs": [geodash.bloodhound.codec]
  },
  "dynamicStyleFunctionWorkspaces": [
    geodash.dynamicStyleFn
  ],
  "transport" : {
    "littleEndian": false
  },
  "popup": {
    "height": "309px",
    "context": {
      "e": extract,
      "extract": extract,
      "extractFloat": extractFloat
    },
    "listeners": {
      "show": []
    }
  },
  "whitelist": {
    "config": [
      "gist.githubusercontent.com"
    ]
  }
};
