console.log("working");

const url = '/metadata/mapinfo';

// Perform a GET request to the query URL
d3.json(url).then((data) => {
    console.log(data);

  //   let geojson = {
  //     "type": "FeatureCollection",
  //     "features": [
  //     {
  //         "type": "Feature",
  //         "geometry" : {
  //             "type": "Point",
  //             "coordinates": [d["long"], d["lat"]],
  //             },
  //         "properties" : d,
  //      } for d in data]
  // }

  createFeatures(data);
});

function createFeatures(breweryData) {
  let processFeature = (feature, layer) => {
    layer.bindPopup(`<h3>${breweryData.brewery_name}`);
  };

  let breweries = L.geoJSON(breweryData, {
    onEachFeature: processFeature
  }); 

  createMap(breweries);
};

function createMap(breweries) {
  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };

  let overlayMaps = {
    Breweries: breweries
  };

  // Create a new map
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [streetmap, breweries]
  });

  // Create a layer control containing our baseMaps
  // Be sure to add an overlay Layer containing the earthquake GeoJSON
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}