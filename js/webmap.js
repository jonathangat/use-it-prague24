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

    labels.push(
        `<i class="custom-icon" style="background-image:url('${iconDic[Object.keys(iconDic)[i]].options.iconUrl}')"></i> ${Object.keys(iconDic)[i]} `);


 };

 const legendElement = document.getElementById("legendBodyContent");
 legendElement.innerHTML = labels.join('<br />');



    // create feature groups
    let locations  = L.featureGroup();
    let locations_filtered =  L.featureGroup();

    L.geoJSON(raw_data, {    pointToLayer: function(feature, latlng) {
            // Use the custom icon for each feature
            return L.marker(latlng, { icon: iconDic[feature.properties.legend_category] });
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<div class="dm-sans-100"><h3>${feature.properties.quirky_title}</h3></div><div class="dm-sans-200">${feature.properties.ai_description}</div> <div class="dm-sans-100" style="margin-top:10px;"><b>${feature.properties.location_name} </b>${feature.properties.sub_category} in ${feature.properties.neighbourhood}</div><div class="dm-sans-100">${feature.properties.address}</div>`);
        }}).addTo(locations);
        locations.addTo(map);
        map.flyToBounds(locations.getBounds());
        populate_category_filter(raw_data);
        map.spin(false);



            // where are we heading dropdown
    $(".dropdown-menu a").click(function(){
        $('#dropdownMenuLink').text($(this).text());
      });

    


    // act like a local save button
    $('#exampleModalCenter').on('hidden.bs.modal', function(){

        // remove all content from map
        locations.clearLayers();
        locations_filtered.clearLayers();
        map.removeLayer(locations);
        map.removeLayer(locations_filtered);

        // get neighbourhood
        let selected_neighbourhood = $('#dropdownMenuLink').text().trim();
        if (selected_neighbourhood.trim() === 'Select neighbourhood:') {
            selected_neighbourhood = null
        };
        let selected_buttons = [];
        $('.btn-check:checked').each(function() {
            var label = $('label[for="' + $(this).attr('id') + '"]').text().trim().toLowerCase();
            if (label === 'slow down') {
                label += ' (mind the details)';
            };
            selected_buttons.push(label);
            $(this).prop('checked', false); 
        });
        $('#dropdownMenuLink').text('Select neighbourhood:');

        // Function to filter the GeoJSON
        function filterGeoJSON(geojson, filterCategories, optionalNeighbourhood) {
            return {
            ...geojson,
            features: geojson.features.filter(feature => {
                const legendCategory = feature.properties.legend_category;
                const neighbourhood = feature.properties.neighbourhood;
        
                const matchesCategory = filterCategories.length > 0 ? filterCategories.includes(legendCategory) : true;
                const matchesNeighbourhood = optionalNeighbourhood ? neighbourhood === optionalNeighbourhood : true;
        
                return matchesCategory && matchesNeighbourhood;
            })
            };
        }
        

        const filteredGeoJSON = filterGeoJSON(raw_data, selected_buttons, selected_neighbourhood);
        if (filteredGeoJSON.features.length > 0) {

            locations.clearLayers();
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

    // select all
    $('#select-all-categories-btn').click(function(){
        $('#choose-category-modal-body .form-check-input').prop('checked', true);
    });


    // choose a category save button
    $('#chooseAcategoryModal').on('hidden.bs.modal', function(){
        // get values of checked boxes
        let selected_categories_list = [];
        $('#choose-category-modal-body input[type="checkbox"]:checked').each(function() {
            selected_categories_list.push($(this).val());
        });
        
        // get existing layer

        let existing_layer = locations.toGeoJSON();
        locations_filtered.clearLayers();
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
            map.flyToBounds(locations_filtered.getBounds());

        }

        else {
            alert('Aye aye captain! Choose at least one category!')
            
        }

        


    });




});




