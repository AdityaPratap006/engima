import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
    width: "100%",
    height: "100%",

};

const MapboxGLMap = ({ locationArray }) => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    const geoJsonData = {
        type: 'FeatureCollection',
        features: [
            ...locationArray.map(location => {
                return {
                    type: 'Feature',
                    geometry: {
                        type: "Point",
                        coordinates: [location.long, location.lat]
                    },
                    properties: {
                        'marker-color': '#3bb2d0',
                        'marker-size': 'large',
                        'marker-symbol': 'rocket'
                    }
                }
            })
        ]
    };

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                doubleClickZoom: true,
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
                center: [locationArray[0].long, locationArray[0].lat],
                zoom: 8
            });


            map.on("load", function () {
                 /* Image: An image is loaded and added to the map. */
                 map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
                    if (error) throw error;
                    map.addImage("custom-marker", image);
                    /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
                    // Add a new source from our GeoJSON data and set the
                // 'cluster' option to true. GL-JS will add the point_count property to your source data.
                map.addSource("potholes", {
                    type: "geojson",
                    // Point to GeoJSON data. This example visualizes all M1.0+ potholes
                    // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
                    data: geoJsonData,
                    cluster: true,
                    clusterMaxZoom: 14, // Max zoom to cluster points on
                    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
                });

                map.addLayer({
                    id: "clusters",
                    type: "circle",
                    source: "potholes",
                    filter: ["has", "point_count"],
                    paint: {
                        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                        // with three steps to implement three types of circles:
                        //   * Blue, 20px circles when point count is less than 100
                        //   * Yellow, 30px circles when point count is between 100 and 750
                        //   * Pink, 40px circles when point count is greater than or equal to 750
                        "circle-color": [
                            "step",
                            ["get", "point_count"],
                            "#51bbd6",
                            100,
                            "#f1f075",
                            750,
                            "#f28cb1"
                        ],
                        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40]
                    }
                });

                map.addLayer({
                    id: "cluster-count",
                    type: "symbol",
                    source: "potholes",
                    filter: ["has", "point_count"],
                    layout: {
                        "text-field": "{point_count_abbreviated}",
                        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                        "text-size": 12
                    }
                });

                map.addLayer({
                    id: "unclustered-point",
                    type: "circle",
                    source: "potholes",
                    filter: ["!", ["has", "point_count"]],
                    paint: {
                        "circle-color": "red",
                        "circle-radius": 8,
                        "circle-stroke-width": 1,
                        "circle-stroke-color": "#fff"
                    }
                });

                // inspect a cluster on click
                map.on("click", "clusters", function (e) {
                    var features = map.queryRenderedFeatures(e.point, {
                        layers: ["clusters"]
                    });
                    var clusterId = features[0].properties.cluster_id;
                    map
                        .getSource("potholes")
                        .getClusterExpansionZoom(clusterId, function (err, zoom) {
                            if (err) return;

                            map.easeTo({
                                center: features[0].geometry.coordinates,
                                zoom: zoom
                            });
                        });
                });

                map.on("mouseenter", "clusters", function () {
                    map.getCanvas().style.cursor = "pointer";
                });
                map.on("mouseleave", "clusters", function () {
                    map.getCanvas().style.cursor = "";
                });
                });
               
            });


            // map.on("load", function () {
            //     /* Image: An image is loaded and added to the map. */
            //     map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
            //         if (error) throw error;
            //         map.addImage("custom-marker", image);
            //         /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
            //         map.addLayer({
            //             id: "markers",
            //             type: "symbol",
            //             /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
            //             source: {
            //                 type: "geojson",
            //                 // cluster: true,
            //                 // clusterRadius:10,
            //                 data: geoJsonData,
            //             },
            //             layout: {
            //                 "icon-image": "custom-marker",
            //             }
            //         });
            //     });
            // });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map, locationArray, geoJsonData]);

    return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;

