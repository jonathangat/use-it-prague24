// wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", async () => { 

    // set parameters
    const data_endpoint_url = "https://script.google.com/macros/s/AKfycbzN9Wh82r1aebrbBBMmCqm6B5vjVUGiwgu2rwSJjT4xFYgzHgylCAkJzyg4EBvYvtJO/exec";
    const config_endpoint_url = "https://script.googleusercontent.com/macros/echo?user_content_key=TKrnlJy5Agjdl5SkoZrL4Va4eZ0EzVw7Eb20_NjFFtztC_fibkq1jUfqAnJ4OC1SkSfahEt7xdGYKXFHbwL122ApkmUizI3Zm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHiHlJ7peVhvkLdsdjN8JOaMfomI2XAcm4MbPoFTA-92ddmlENpF4Sk_3vcOQmEPKMVjr9Ee-yyQ_flDULZPnv7WcRkUE7usxNz9Jw9Md8uu&lib=MmU56-eEEJ0vfh_VLHQiY5PIw12cnwnuP";

    // config map
    async function fetchMapConfig() {
        const response = await fetch(config_endpoint_url);
        const mapConfig = await response.json();
        return mapConfig;
    };

    // fetch data from database
    async function fetchPOIs() {
            const response = await fetch(data_endpoint_url);
            const pois = await response.json();
            return pois
        };

    const connector = await fetchMapConfig();
    const pois = fetchPOIs();

        // populate choose a category filter modal
    const populate_category_filter = function(geojson) {
            // create an empty set for categories
            let categories_set = new Set();
    
            // iterate over geojson elements
            $.each(geojson.features, function(i,val) {
                if (val.properties.sub_category) {
                    categories_set.add(val.properties.sub_category);
                }
                
            });

            // sort categories
            let categories_array = [];
            categories_set.forEach(function(val){categories_array.push(val)});
            categories_array.sort();
    
            // empty category filter list
            $('#choose-category-modal-body').empty();
    
            // populate category filter list
            let category_idx = 0;
            categories_array.forEach(function(val) {
                $('#choose-category-modal-body').append(`
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${val}" id="category_${category_idx}" checked>
                    <label class="form-check-label" for="category_${category_idx}">
                        ${val}
                    </label>
                </div>
            `);
    
            category_idx++;
    
            });
    
    
    
    
        };
    

    // populate map

    const map = L.map('map', {zoomControl: false }).setView([50.0894483, 14.4189551], 15);
    map.spin(true);

    // add basemap
    const mtLayer = L.maptilerLayer({
        apiKey: connector.apiKey,
        style: connector.style, //optional
    }).addTo(map);

    // add legend button
    L.Control.LegendButton = L.Control.extend({
        onAdd: function(map) {
            var btnObj = L.DomUtil.create("div");
            btnObj.innerHTML = '<a class="leaflet-control-layers-toggle" href="#" title="Legend" role="button" data-toggle="modal" data-target="#modalLegendDiv"></a>';
            L.DomUtil.addClass(btnObj, 'leaflet-control-layers leaflet-control');
            return btnObj;
        }
    });

    L.Control.legendButton = function (opts) {
        return new L.Control.LegendButton(opts);
    };
    L.Control.legendButton({position:'topleft'}).addTo(map);


    // add logos
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
      var img = L.DomUtil.create("img");

      img.src = `./img/logos/logos.png`;
      L.DomUtil.addClass(img, 'logos img-responsive');

      return img;
    },
  });
  

  L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
  };

  L.control.watermark({ position: "bottomright" }).addTo(map);


    // add boats title
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
      var img = L.DomUtil.create("img");

      img.src = `./img/logos/boats-title.png`;
      img.style.width = "250px";
      L.DomUtil.addClass(img, 'tilt');
      

      return img;
    },
  });

  L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
  };

  L.control.watermark({ position: "topright" }).addTo(map);

    // add custom markers
var verticalMarker = L.Icon.extend({
    options: {
        iconSize:     [25, 35],
        iconAnchor:   [0,35],
        popupAnchor:  [15,-35]
    }
});

var squareMarker = L.Icon.extend({
    options: {
        iconSize:     [25, 25],
        iconAnchor:   [0,0],
        popupAnchor:  [15,0]
    }
});


var conferenceIcon = new verticalMarker({iconUrl: './img/markers/marker-conference.png'}),
    drinkIcon = new verticalMarker({iconUrl: './img/markers/marker-drink.png'}),
    eatIcon = new verticalMarker({iconUrl: './img/markers/marker-eat.png'}),
    eatDinnerIcon = new verticalMarker({iconUrl: './img/markers/marker-eat-dinner.png'}),
    eatLunchMenuIcon = new verticalMarker({iconUrl: './img/markers/marker-eat-lunch.png'}),
    seeIcon = new verticalMarker({iconUrl: './img/markers/marker-see.png'}),
    shopIcon = new verticalMarker({iconUrl: './img/markers/marker-shop.png'}),
    chillIcon = new verticalMarker({iconUrl: './img/markers/marker-chill.png'}),
    gooutIcon = new verticalMarker({iconUrl: './img/markers/marker-go-out.png'}),
    slowdownIcon = new squareMarker({iconUrl: './img/markers/slow-down.png'}),
    enjoyvietnamesecultureIcon = new squareMarker({iconUrl: './img/markers/enjoy-vietnamese-culture.png'}),
    speakLikeALocalIcon = new squareMarker({iconUrl: './img/markers/speak-like-a-local.png'}),
    buySomeSouvenirIcon = new squareMarker({iconUrl: './img/markers/buy-some-souvenir.png'})
    tryCzechDelicassyIcon = new squareMarker({iconUrl: './img/markers/try-czech-delicasy.png'});


var iconDic = {
    'conference':conferenceIcon,
    'drink':drinkIcon,
    'eat':eatIcon,
    'eat dinner':eatDinnerIcon,
    'eat lunch menu': eatLunchMenuIcon,
    'see':seeIcon,
    'shop':shopIcon,
    'go out':gooutIcon,
    'chill':chillIcon,
    'slow down (mind the details)':slowdownIcon,
    'enjoy vietnamese culture':enjoyvietnamesecultureIcon,
    'speak like a local':speakLikeALocalIcon,
    'try czech delicacy':tryCzechDelicassyIcon,
    'buy some souvenir':buySomeSouvenirIcon

}
// get raw data
const raw_data = await pois;

// populate neighbourhoods
let neighbourhoods_set = new Set();
$.each(raw_data.features, function(i, val) {
    neighbourhoods_set.add(val.properties.neighbourhood)
});

let neighbourhoods_array = [];
neighbourhoods_set.forEach(function(val) {neighbourhoods_array.push(val)});
neighbourhoods_array.sort()

neighbourhoods_array.forEach(function(val) {
    $('#select-neighbourhood-list').append(`<a class="dropdown-item" href="#">${val}</a>`)
});




// populate legend legendBodyContent
let labels = [];
for (var i = 0; i < Object.keys(iconDic).length; i++) { 

    if (Object.keys(iconDic)[i] == 'slow down (mind the details)') {
        labels.push(
            `<h6 class='pt-4'>Act Like a Local</h6><i class="custom-icon" style="background-image:url('${iconDic[Object.keys(iconDic)[i]].options.iconUrl}')"></i> ${Object.keys(iconDic)[i]} `);
    

    }

    else {
        labels.push(
            `<i class="custom-icon" style="background-image:url('${iconDic[Object.keys(iconDic)[i]].options.iconUrl}')"></i> ${Object.keys(iconDic)[i]} `);
    
    }

    

 };

 const legendElement = document.getElementById("legendBodyContent");
 legendElement.innerHTML = labels.join('<br />');



    // create feature groups
    let locations  = L.featureGroup();
    let locations_filtered =  L.featureGroup();
    let spider = L.featureGroup();

    let resetMap = function() {
        // clear layers
        locations.clearLayers();
        locations_filtered.clearLayers();
        spider.clearLayers();
        map.removeLayer(locations);
        map.removeLayer(spider);
        map.removeLayer(locations_filtered);
        
        L.geoJSON(raw_data, {    pointToLayer: function(feature, latlng) {
            // Use the custom icon for each feature
            return L.marker(latlng, { icon: iconDic[feature.properties.legend_category] });
        },
        onEachFeature: function(feature, layer) {
            const popup_content = `<div class="dm-sans-100"><h3>${feature.properties.quirky_title}</h3></div><div class="dm-sans-200">${feature.properties.ai_description}</div> <div class="dm-sans-100" style="margin-top:10px;"><b>${feature.properties.location_name} </b>${feature.properties.sub_category} in ${feature.properties.neighbourhood}</div><div class="dm-sans-100">${feature.properties.address}</div>`;
            layer.bindPopup(popup_content);
        }}).addTo(locations);
        locations.addTo(map);
        map.flyToBounds(locations.getBounds());
        populate_category_filter(raw_data);
        map.spin(false);
    };

    // reset map
    resetMap();





            // where are we heading dropdown
    $(".dropdown-menu a").click(function(){
        $('#dropdownMenuLink').text($(this).text());
      });

    


    // act like a local save button
    $('#exampleModalCenter').on('hidden.bs.modal', function(){

        // remove all content from map
        locations.clearLayers();
        locations_filtered.clearLayers();
        spider.clearLayers();
        map.removeLayer(locations);
        map.removeLayer(spider);
        map.removeLayer(locations_filtered);

        // get neighbourhood
        let selected_buttons = [];
        $('.btn-check:checked').each(function() {
            var label = $('label[for="' + $(this).attr('id') + '"]').text().trim().toLowerCase();
            if (label === 'slow down') {
                label += ' (mind the details)';
            };
            selected_buttons.push(label);
            $(this).prop('checked', false); 
        });
        

        // Function to filter the GeoJSON
        function filterGeoJSON(geojson, filterCategories) {
            return {
            ...geojson,
            features: geojson.features.filter(feature => {
                const legendCategory = feature.properties.legend_category;
                const matchesCategory = filterCategories.length > 0 ? filterCategories.includes(legendCategory) : true;
                return matchesCategory;
            })
            };
        }
        

        const filteredGeoJSON = filterGeoJSON(raw_data, selected_buttons);
        if (filteredGeoJSON.features.length > 0) {

            // clear map
            locations.clearLayers();
            locations_filtered.clearLayers();
            spider.clearLayers();
            map.removeLayer(locations);
            map.removeLayer(spider);
            map.removeLayer(locations_filtered);
            L.geoJSON(filteredGeoJSON, {    pointToLayer: function(feature, latlng) {
                // Use the custom icon for each feature
                return L.marker(latlng, { icon: iconDic[feature.properties.legend_category] });
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(`<div class="dm-sans-100"><h3>${feature.properties.quirky_title}</h3></div><div class="dm-sans-200">${feature.properties.ai_description}</div> <div class="dm-sans-100" style="margin-top:10px;"><b>${feature.properties.location_name} </b>${feature.properties.sub_category} in ${feature.properties.neighbourhood}</div><div class="dm-sans-100">${feature.properties.address}</div>`);
            }}).addTo(locations);


            populate_category_filter(filteredGeoJSON);

            // add to map
            locations.addTo(map);
            map.flyToBounds(locations.getBounds());


        }
        else {

            alert('No locations were found, try a different combo!');

        }


    });

    // uncheck all categories
    $('#select-no-categories-btn').click(function(){
        $('#choose-category-modal-body .form-check-input:checked').prop('checked', false);
    });

    // select all categories
    $('#select-all-categories-btn').click(function(){
        $('#choose-category-modal-body .form-check-input').prop('checked', true);
    });


    // uncheck all neighbourhoods
    $('#select-no-neighbourhoods-btn').click(function(){
        $('#like-local-options .btn-check:checked').prop('checked', false);
    });

    // select all categories
    $('#select-all-neighbourhoods-btn').click(function(){
        $('#like-local-options .btn-check').prop('checked', true);
    });

    // choose a neighbourhood
    $('#choose-neighbourhood-button').click(function() {
        let selected_neighbourhood = $('#dropdownMenuLink').text().trim();
        if (selected_neighbourhood.trim() === 'Select neighbourhood:') {
            selected_neighbourhood = null
        }
        else {
            locations.clearLayers();
            locations_filtered.clearLayers();
            spider.clearLayers();
            map.removeLayer(locations);
            map.removeLayer(spider);
            map.removeLayer(locations_filtered);
            map.removeLayer(locations);

            function filterGeoJSON(geojson, neighbourhood) {
                return {
                    ...geojson,
                    features: geojson.features.filter(feature => {
                        return feature.properties.neighbourhood === neighbourhood;
                    })
                };
            }

            let filtered_layer = filterGeoJSON(raw_data, selected_neighbourhood);
            L.geoJSON(filtered_layer, {    pointToLayer: function(feature, latlng) {
                // Use the custom icon for each feature
                return L.marker(latlng, { icon: iconDic[feature.properties.legend_category] });
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(`<div class="dm-sans-100"><h3>${feature.properties.quirky_title}</h3></div><div class="dm-sans-200">${feature.properties.ai_description}</div> <div class="dm-sans-100" style="margin-top:10px;"><b>${feature.properties.location_name} </b>${feature.properties.sub_category} in ${feature.properties.neighbourhood}</div><div class="dm-sans-100">${feature.properties.address}</div>`);
            }}).addTo(locations);
            

            // add to map
            locations.addTo(map);

            if (filtered_layer.features.length > 1) {
                populate_category_filter(filtered_layer);
                map.flyToBounds(locations.getBounds());
            }
            else {
                var feature = filtered_layer.features[0];
                var coordinates = feature.geometry.coordinates;
                var point = L.latLng(coordinates[1], coordinates[0]); // GeoJSON format is [longitude, latitude]
                populate_category_filter(filtered_layer);
                map.panTo(point);
            }
            


            
        }

        $('#dropdownMenuLink').text('Select neighbourhood:');

    });


    // choose a category save button choose-category-button
    // $('#chooseAcategoryModal').on('hidden.bs.modal', function(){
    $('#choose-category-button').click(function(){
        // get values of checked boxes
        let selected_categories_list = [];
        $('#choose-category-modal-body input[type="checkbox"]:checked').each(function() {
            selected_categories_list.push($(this).val());
        });
        
        // get existing layer

        let existing_layer = locations.toGeoJSON();
        locations.clearLayers();
        locations_filtered.clearLayers();
        spider.clearLayers();
        map.removeLayer(locations);
        map.removeLayer(spider);
        map.removeLayer(locations_filtered);
        function filterGeoJSON(geojson, filterCategories) {
            return {
            ...geojson,
            features: geojson.features.filter(feature => {
                const legendCategory = feature.properties.sub_category;
                const matchesCategory = filterCategories.length > 0 ? filterCategories.includes(legendCategory) : true;
                return matchesCategory
            })
            };
        };


        if (selected_categories_list.length > 0) {
            let filtered_layer = filterGeoJSON(existing_layer, selected_categories_list);
            map.removeLayer(locations);
            map.removeLayer(locations_filtered);
            L.geoJSON(filtered_layer, {    pointToLayer: function(feature, latlng) {
                // Use the custom icon for each feature
                return L.marker(latlng, { icon: iconDic[feature.properties.legend_category] });
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(`<div class="dm-sans-100"><h3>${feature.properties.quirky_title}</h3></div><div class="dm-sans-200">${feature.properties.ai_description}</div> <div class="dm-sans-100" style="margin-top:10px;"><b>${feature.properties.location_name} </b>${feature.properties.sub_category} in ${feature.properties.neighbourhood}</div><div class="dm-sans-100">${feature.properties.address}</div>`);
            }}).addTo(locations_filtered);
            

            // add to map
            locations_filtered.addTo(map);

            if (filtered_layer.features.length > 1) {
                map.flyToBounds(locations_filtered.getBounds());
            }
            else {
                var feature = filtered_layer.features[0];
                var coordinates = feature.geometry.coordinates;
                var point = L.latLng(coordinates[1], coordinates[0]); // GeoJSON format is [longitude, latitude]
                map.panTo(point);
            }
            

        }

        else {
            alert('Aye aye captain! Choose at least one category!')
            
        }

    });

    // reset button
    $('#choose-all-neighbourhood-button').click(function(){
        // reset map
        resetMap();
    });


    // spider game!


    $('#spiderModal').on('hidden.bs.modal', function(){
        let userLong;
        let userLat;
        map.spin(true);

        const options = {
            enableHighAccuracy: false
          };
          
          function success(pos) {
            const crd = pos.coords;
            userLat = crd.latitude;
            userLong = crd.longitude;
            map.spin(false);

            // get the map bounds
            let userLocation = L.latLng(userLat, userLong);
            let pragueExtent_northEast = L.latLng(50.19652977176375, 14.739976445243656);
            let pragueExtent_southWest = L.latLng(49.92346683504081, 14.186088870217787);
            let pragueExtent = L.latLngBounds(pragueExtent_northEast,pragueExtent_southWest);
            if (pragueExtent.contains(userLocation)) {
                console.log(`Yay! You are in Prague at the moment! Your location is ${userLong},${userLat}`)
                let origin_coordinates = `${userLong},${userLat}`;
                let osrm_table_request_coordinates = [origin_coordinates];
                // get current layer content
                map.eachLayer(function(layer){
                    if (layer instanceof L.Marker) {
                        var latlng = layer.getLatLng();
                        osrm_table_request_coordinates.push(`${latlng['lng']},${latlng['lat']}`)
                    }
                    
                });

                // generalise function to find keys of smallest values
                function keysOfSmallestValues(obj, numKeys) {
                    const keyValuePairs = Object.entries(obj);
                    keyValuePairs.sort((a,b) => a[1] - b[1]);
                    const smallestKeys = keyValuePairs.slice(0, numKeys).map(pair => pair[0])
                    return smallestKeys.map(kval => parseInt(kval))
                }

                var osrm_table_request = `https://router.project-osrm.org/table/v1/foot/${osrm_table_request_coordinates.join(';')}?sources=0`;
                fetch(osrm_table_request)
                    .then(response => response.json())
                    .then(data => {
                var smallerValue = Math.min(osrm_table_request_coordinates.length, 6);
                var nearest3_idx = keysOfSmallestValues(data.durations[0], smallerValue).slice(-1*smallerValue);
                var nearest3_locations = nearest3_idx.map(index => osrm_table_request_coordinates[index]);
                
                // iterate over the nearest locations
                nearest3_locations.forEach(function(near_location) {
                    var osrm_route_request = `https://router.project-osrm.org/route/v1/foot/${origin_coordinates};${near_location}?overview=full&geometries=geojson`;
                    // fetch route
                    fetch(osrm_route_request).then(response => response.json()).then(data => {
                        // extract geojson
                        let route_geom = data.routes[0].geometry;
                        L.geoJSON(route_geom).addTo(spider);
                    }).catch(error => console.error('Error:', error));
                });

                // add origin as L.circleMarker()
                L.circleMarker(userLocation).addTo(spider, {color:'red',fillcolor:'blue',fillopacity:0.5, radius:5});

                // add to map
                spider.addTo(map);
                let spider_bounds = spider.getBounds()
                map.flyToBounds(spider_bounds);
            
                    });


            }
            else {
                alert(`Arrr! Where be ye hidin'?? Are you even in Prague?! Your location is ${userLong},${userLat}`)
            }

            

          }
          
          function error(err) {
            map.spin(false);
            alert(`Arrr! Ye be as elusive as buried treasure on a moonless night! I can't locate ye!`)
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error, options);

          

    });





});




