// Checking if the element Map exists

if (!!document.getElementById("map")) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ3JhbnR0cmFuc2l0aW9uIiwiYSI6ImNqaTM2Z2o0ZjF1anIza210b24zbnJoangifQ.rFncpsx-qOjBK0B0xqZ2-Q";

  /* Map: This represents the map on the page. */
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v9",
    zoom: 13.0,
    center: [-2.426695, 52.040595],
  });

  // disable map zoom when using scroll
  map.scrollZoom.disable();

  map.on("load", function() {
    /* Image: An image is loaded and added to the map. */
    map.loadImage("/assets/img/gmap_marker.png", function(
      error,
      image
    ) {
      if (error) throw error;
      map.addImage("custom-marker", image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      map.addLayer({
        id: "markers",
        type: "symbol",
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: ["-2.426695", "52.040595"],
                },
              },
            ],
          },
        },
        layout: {
          "icon-image": "custom-marker",
        },
      });
    });
  });
}
