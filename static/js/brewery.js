// Store our API endpoint as queryUrl
var queryUrl = "http://api.brewerydb.com/v2/locations/?key=3ad19e28f03b826db8e99e3913948335"

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
  console.log(data.latitude);
  // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
  // createFeatures(data.features);
});

// function createFeatures(earthquakeData) {
//   let processFeature = (feature, layer) => {
//     layer.bindPopup(`<h3>${feature.properties.place}</h3>
//       <hr><p>${new Date(feature.properties.time)}</p>`);
//   };

//   let earthquakes = L.geoJSON(earthquakeData, {
//     onEachFeature: processFeature
//   }); 

//   createMap(earthquakes);
// }

// function createMap(earthquakes) {
//   // Define streetmap and darkmap layers
//   var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   });

//   var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.dark",
//     accessToken: API_KEY
//   });

//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap,
//     "Dark Map": darkmap
//   };

//   let overlayMaps = {
//     "Earthquakes": earthquakes
//   };

//   // Create a new map
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, earthquakes]
//   });

//   // Create a layer control containing our baseMaps
//   // Be sure to add an overlay Layer containing the earthquake GeoJSON
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
// }