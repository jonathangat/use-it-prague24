// add data
var geodata = {
    "type": "FeatureCollection",
    "features": [
    { "type": "Feature", "properties": { "location_name": "Kafe Damu", "neighbourhood": "Staré Město", "sub_category": "café", "legend_category": "drink", "address": "Karlova 26, Praha 1", "ai_description": "Escape the bustling streets of Prague and find solace in Kafe DAMU. This cozy coffee haven, nestled in the heart of the city, is a beloved spot for young locals. With its laid-back ambiance and aromatic brews, it's the perfect place for creative minds to unwind or dive into a script, as it sits in close proximity to the vibrant theater scene.", "quirky_title": "Theater Brew Haven" }, "geometry": { "type": "Point", "coordinates": [ 14.4172101, 50.0858996 ] } },
    { "type": "Feature", "properties": { "location_name": "Bageterie Boulevard", "neighbourhood": "Staré Město", "sub_category": "fast food", "legend_category": "eat", "address": "Karlova 22, Praha 1", "ai_description": "Embark on a culinary journey at Bageterie Boulevard, where young food enthusiasts gather for a quick and delicious bite. This trendy spot combines the best of Czech and international flavors, offering a diverse menu of baguettes and snacks. Ideal for those on the move, Bageterie Boulevard adds a dash of gourmet flair to the youthful spirit of Prague.", "quirky_title": "Gourmet on the Go" }, "geometry": { "type": "Point", "coordinates": [ 14.4167066, 50.0859153 ] } },
    { "type": "Feature", "properties": { "location_name": "Crème de la Crème", "neighbourhood": "Staré Město", "sub_category": "ice cream", "legend_category": "eat", "address": "Husova 12, Praha 1", "ai_description": "Indulge your sweet tooth at Creme de la Creme, a dessert haven that captivates with its artisanal creations. This charming patisserie invites young travelers to savor exquisite pastries and heavenly treats. With its elegant decor and mouthwatering offerings, Creme de la Creme is a must-visit for those seeking a delightful escape into Prague's dessert paradise.", "quirky_title": "Dessert Paradise" }, "geometry": { "type": "Point", "coordinates": [ 14.4182655, 50.0858082 ] } },
    { "type": "Feature", "properties": { "location_name": "Fashion Shop PARAZIT", "neighbourhood": "Staré Město", "sub_category": "fashion store", "legend_category": "shop", "address": "Karlova 25, Praha 1", "ai_description": "Parazit is more than just a club; it's a cultural melting pot that embraces diversity and creativity. Known for its alternative vibes and underground beats, this venue attracts a crowd of free spirits. Join the eclectic mix at Parazit for a night of unconventional music and a taste of Prague's thriving subculture.", "quirky_title": "Alternative Melting Pot" }, "geometry": { "type": "Point", "coordinates": [ 14.418814, 50.086445 ] } },
    { "type": "Feature", "properties": { "location_name": "Country Life Restaurant", "neighbourhood": "Staré Město", "sub_category": "vegan\/vegeterian", "legend_category": "eat", "address": "Melantrichova 15, Praha 1", "ai_description": "Country Life isn't just a grocery store; it's a lifestyle choice for health-conscious young locals. This organic haven provides a diverse range of fresh produce, vegan delights, and eco-friendly products. Embrace the green ethos of Prague as you explore the aisles of Country Life, where conscious living meets culinary indulgence.", "quirky_title": "Organic Lifestyle Choice" }, "geometry": { "type": "Point", "coordinates": [ 14.4205251, 50.085688 ] } },
    { "type": "Feature", "properties": { "location_name": "Krčma", "neighbourhood": "Staré Město", "sub_category": "restaurant pub", "legend_category": "eat", "address": "Kostečná 4, Praha 1", "ai_description": "Discover the soul of Czech tradition at Krčma, a hidden gem known to locals. This quaint tavern invites young travelers to savor the rich flavors of authentic Czech cuisine while immersing themselves in the warmth of local hospitality. With its dimly lit atmosphere and hearty meals, Krčma is not just a dining experience; it's a journey into the heart of Czech culture.", "quirky_title": "Cozy Czech Tavern" }, "geometry": { "type": "Point", "coordinates": [ 14.4201723, 50.089018700000011 ] } },
    { "type": "Feature", "properties": { "location_name": "Žabka", "neighbourhood": "Staré Město", "sub_category": "grocery", "legend_category": "shop", "address": "Maislova 8, Praha 1", "ai_description": "For the young explorer on the go, Žabka is a ubiquitous friend. This neighborhood convenience store is a treasure trove for late-night snacks and essentials. Whether you're in need of a quick energy boost or craving a taste of local snacks, Žabka is the go-to spot where convenience meets local charm.", "quirky_title": "Snack Oasis" }, "geometry": { "type": "Point", "coordinates": [ 14.4187548, 50.0884793 ] } },
    { "type": "Feature", "properties": { "location_name": "Restaurace Mincovna", "neighbourhood": "Staré Město", "sub_category": "restaurant", "legend_category": "eat", "address": "Staroměstské nám. 7, Praha 1", "ai_description": "Mincovna is the rendezvous for those seeking an intimate setting away from the mainstream. This underground gem offers a cozy escape, where you can unwind with friends over drinks and immerse yourself in meaningful conversations. Mincovna invites young travelers to experience the authentic, laid-back side of Prague's nightlife.", "quirky_title": "Laid-back Nightspot" }, "geometry": { "type": "Point", "coordinates": [ 14.4212728, 50.0882963 ] } },
    { "type": "Feature", "properties": { "location_name": "The Miners Coffee Old Town", "neighbourhood": "Staré Město", "sub_category": "coffee shop", "legend_category": "drink", "address": "Železná 14, Praha 1", "ai_description": "Step into the subterranean charm of Miners, a hidden haunt for those in search of an intimate setting. This underground bar offers a unique atmosphere, making it a favorite among locals for its low-key vibe and signature cocktails. Dive into the depths of Prague's nightlife at Miners, where every sip feels like a discovery.", "quirky_title": "Subterranean Sips" }, "geometry": { "type": "Point", "coordinates": [ 14.4218181, 50.086382099999987 ] } },
    { "type": "Feature", "properties": { "location_name": "Zázemí 2", "neighbourhood": "Staré Město", "sub_category": "bar", "legend_category": "drink", "address": "Michalská 12, Praha 1", "ai_description": "Zázemí 2 is the heartbeat of Prague's nightlife, a vibrant club where young locals come alive after dark. With its pulsating beats and eclectic atmosphere, this venue sets the stage for unforgettable nights out. Dive into the energy of Zázemí 2, where the city's music scene and youthful exuberance collide.", "quirky_title": "Prague's Nightbeat Hub" }, "geometry": { "type": "Point", "coordinates": [ 14.4200703, 50.0850663 ] } },
    { "type": "Feature", "properties": { "location_name": "Skautský institut", "neighbourhood": "Staré Město", "sub_category": "conference venue", "legend_category": "conference", "address": "Staroměstské náměstí 4\/1, Praha 1", "ai_description": "Dive into the world of scouting at the Skautský Institute, a vibrant hub where young minds come together to learn, explore, and embrace the values of scouting. This institute serves as a haven for both locals and travelers, fostering a sense of community and adventure in the heart of Prague.", "quirky_title": "Scouting Wonderland" }, "geometry": { "type": "Point", "coordinates": [ 14.4198587, 50.0866666 ] } },
    { "type": "Feature", "properties": { "location_name": "Eaternia Vegan", "neighbourhood": "Smíchov", "sub_category": "vegan\/vegeterian", "legend_category": "eat", "address": "Nádražní 3, Praha 5", "ai_description": "Eaternia invites young travelers on a culinary journey through diverse flavors. This fusion eatery blends Eastern and Western influences, offering a menu that reflects Prague's cultural diversity. With its modern decor and innovative dishes, Eaternia is a hotspot for those craving a taste of the world on a single plate.", "quirky_title": "Culinary Fusion Adventure" }, "geometry": { "type": "Point", "coordinates": [ 14.4076466, 50.0655924 ] } },
    { "type": "Feature", "properties": { "location_name": "Underdogs'", "neighbourhood": "Smíchov", "sub_category": "music bar", "legend_category": "go out", "address": "Nádražní 3, Praha 5", "ai_description": "Embrace Prague's artistic soul at Underdogs', a creative space where contemporary art takes center stage. This gallery showcases emerging talents and challenges conventional norms. Explore the thought-provoking exhibits and installations that make Underdogs' a beacon for those seeking the cutting edge of Prague's art scene.", "quirky_title": "Artistic Soul Space" }, "geometry": { "type": "Point", "coordinates": [ 14.4076931, 50.065684399999988 ] } },
    { "type": "Feature", "properties": { "location_name": "Potrefená husa Na Verandách", "neighbourhood": "Smíchov", "sub_category": "restaurant pub", "legend_category": "eat", "address": "Nádražní 84, Praha 5", "ai_description": "PH Na Verandách is a picturesque retreat offering panoramic views of Prague. This charming spot, nestled amidst greenery, provides a tranquil escape for young locals. Whether you're enjoying a leisurely brunch or sipping cocktails at sunset, PH Na Verandách is a hidden oasis that reveals the serene side of the city.", "quirky_title": "Panoramic Tranquility" }, "geometry": { "type": "Point", "coordinates": [ 14.4066351, 50.068497099999988 ] } },
    { "type": "Feature", "properties": { "location_name": "Kafe Kolej", "neighbourhood": "Smíchov", "sub_category": "coffee stand", "legend_category": "drink", "address": "Nádražní 279\/1, Praha 5", "ai_description": "Kafe Kolej is more than just a coffee spot; it's a gathering place for students and young intellectuals. Located near the university, this cozy cafe buzzes with the energy of lively conversations and the aroma of freshly brewed coffee. Join the vibrant community at Kafe Kolej for a taste of Prague's academic spirit.", "quirky_title": "Academic Coffee Hub" }, "geometry": { "type": "Point", "coordinates": [ 14.4090078, 50.0611881 ] } },
    { "type": "Feature", "properties": { "location_name": "Italians", "neighbourhood": "Smíchov", "sub_category": "bistro, bakery, deli", "legend_category": "eat", "address": "Strakonická 1, Praha 5", "ai_description": "Transport yourself to the charming streets of Italy at Italians, a cafe that captures the essence of European elegance. With its cozy ambiance and authentic coffee, Italians invites young travelers to experience the allure of European cafe culture. Whether you're seeking a quiet moment or lively conversations, Italians offers a slice of continental charm in the heart of Prague.", "quirky_title": "European Elegance Cafe" }, "geometry": { "type": "Point", "coordinates": [ 14.4103504, 50.0631245 ] } },
    { "type": "Feature", "properties": { "location_name": "Smíchovská náplavka", "neighbourhood": "Smíchov", "sub_category": "café\/beer\/wine gardens", "legend_category": "drink", "address": "Hořejší nábřeží, Praha 5", "ai_description": "Experience the vibrant energy of Smíchovská náplavka, a riverside haven where young locals gather to unwind. This lively spot along the Vltava River transforms into a cultural hub with food stalls, live music, and a buzzing atmosphere. Whether you're enjoying a leisurely stroll or dancing under the stars, Smíchovská náplavka captures the essence of Prague's dynamic spirit.", "quirky_title": "Riverside Vibes" }, "geometry": { "type": "Point", "coordinates": [ 14.4116055, 50.068442 ] } },
    { "type": "Feature", "properties": { "location_name": "(A)void Floating Gallery", "neighbourhood": "Smíchov", "sub_category": "beer garden", "legend_category": "drink", "address": "Náplavka, Praha 2", "ai_description": "Immerse yourself in the avant-garde at (A)void Floating Gallery. This floating art space challenges perceptions with its ever-changing exhibits and installations. As you navigate through this innovative gallery, be prepared for a mind-bending journey that pushes boundaries and sparks conversations.", "quirky_title": "Avant-Garde Afloat" }, "geometry": { "type": "Point", "coordinates": [ 14.4144219, 50.0679692 ] } },
    { "type": "Feature", "properties": { "location_name": "Puro Gelato", "neighbourhood": "Smíchov", "sub_category": "ice cream", "legend_category": "eat", "address": "Na Hrobci 1, Praha 2", "ai_description": "Satisfy your sweet cravings at Puro Gelato, a gelateria that crafts artisanal delights. Indulge in the creamy goodness of freshly made gelato, with flavors ranging from classic to inventive. Puro Gelato invites young travelers to treat themselves to a delightful escape into the world of Italian-inspired frozen delights.", "quirky_title": "Italian-Inspired Treats" }, "geometry": { "type": "Point", "coordinates": [ 14.4150572, 50.068278799999987 ] } },
    { "type": "Feature", "properties": { "location_name": "Botel Vodník", "neighbourhood": "Smíchov", "sub_category": "accomodation", "legend_category": "conference", "address": "Strakonická 948\/1, Praha 5", "ai_description": "Experience a unique stay at Botel Vodník, a floating hotel on the Vltava River that combines comfort with aquatic charm. This floating accommodation provides a tranquil retreat, allowing guests to enjoy the gentle sway of the river while being in close proximity to Prague's vibrant city life.", "quirky_title": "River Float Retreat" }, "geometry": { "type": "Point", "coordinates": [ 14.4114068, 50.0630627 ] } },
    { "type": "Feature", "properties": { "location_name": "cafe Citadel", "neighbourhood": "Petrská čtvrť", "sub_category": "cafe bar", "legend_category": "drink", "address": "Klimentská 16, Praha 1", "ai_description": "Unveil the historical tapestry of Prague at Citadela, a fortress with panoramic views that tell tales of the city's past. Perched atop a hill, this iconic landmark provides a captivating backdrop for young explorers. Citadela invites you to step back in time and witness the grandeur of Prague's architectural heritage.", "quirky_title": "Historical Hilltop Tales" }, "geometry": { "type": "Point", "coordinates": [ 14.4296351, 50.0918965 ] } },
    { "type": "Feature", "properties": { "location_name": "U Bukanýra House Boat Music Bar", "neighbourhood": "Petrská čtvrť", "sub_category": "music bar", "legend_category": "go out", "address": "nábřeží Ludvíka Svobody, Praha 1", "ai_description": "Embark on a nautical adventure at U Bukanýra, a pirate-themed pub that adds a touch of whimsy to Prague's pub scene. With its ship-like decor and hearty pub fare, U Bukanýra promises a swashbuckling experience. Join fellow buccaneers for a night of merriment and grog at this unique watering hole.", "quirky_title": "Pirate Pub Adventure" }, "geometry": { "type": "Point", "coordinates": [ 14.4276842, 50.0934865 ] } },
    { "type": "Feature", "properties": { "location_name": "Loď Pivovar", "neighbourhood": "Petrská čtvrť", "sub_category": "brewery restaurant", "legend_category": "eat", "address": "Dvořákovo nábřeží, pier 19, Praha 1", "ai_description": "Embark on a unique brewing journey at Loď Pivovar, a floating brewery on the Vltava River. This innovative establishment combines the love of beer with a scenic setting. Young beer enthusiasts can savor craft brews while enjoying the gentle sway of the boat, creating a memorable experience at the intersection of tradition and modernity.", "quirky_title": "Floating Craft Brewery" }, "geometry": { "type": "Point", "coordinates": [ 14.4266012, 50.0934837 ] } },
    { "type": "Feature", "properties": { "location_name": "FofrKafe - Soukenda", "neighbourhood": "Petrská čtvrť", "sub_category": "coffee shop", "legend_category": "drink", "address": "Soukenická 15, Praha 1", "ai_description": "Fofr Kafe is a trendy coffee spot that resonates with the hip vibes of the neighborhood. With its minimalist decor and specialty brews, this cafe caters to the discerning taste of young coffee enthusiasts. Fofr Kafe is not just a place for caffeine; it's a lifestyle destination where local creatives converge.", "quirky_title": "Hip Coffee Lifestyle" }, "geometry": { "type": "Point", "coordinates": [ 14.4299812, 50.0913128 ] } },
    { "type": "Feature", "properties": { "location_name": "Bike Jesus", "neighbourhood": "Petrská čtvrť", "sub_category": "beer garden, alternative bar", "legend_category": "drink", "address": "Ostrov Štvanice 1125, Praha 7", "ai_description": "Discover the alternative spirit of Prague at Bike Jesus, a cultural space that combines a bike workshop, gallery, and community hub. This eclectic venue reflects the city's commitment to sustainable living and artistic expression. Whether you're into biking or simply seeking a unique experience, Bike Jesus welcomes all with open arms.", "quirky_title": "Sustainable Cultural Hub" }, "geometry": { "type": "Point", "coordinates": [ 14.4362048, 50.095256899999988 ] } },
    { "type": "Feature", "properties": { "location_name": "VILA Štvanice", "neighbourhood": "Petrská čtvrť", "sub_category": "beer garden, theater bar", "legend_category": "drink", "address": "Ostrov Štvanice 858, Praha 7", "ai_description": "Vila Štvanice is a riverside retreat that beckons with its scenic beauty and recreational activities. This historic villa, surrounded by greenery, offers a peaceful escape for young locals. Whether you're engaging in sports or simply enjoying the tranquil atmosphere, Vila Štvanice provides a breath of fresh air in the heart of Prague.", "quirky_title": "Riverside Retreat Haven" }, "geometry": { "type": "Point", "coordinates": [ 14.4367367, 50.0954363 ] } },
    { "type": "Feature", "properties": { "location_name": "Lokál Dlouhááá", "neighbourhood": "Petrská čtvrť", "sub_category": "restaurant pub", "legend_category": "eat", "address": "Dlouhá 33, Praha 1", "ai_description": "Lokál Dlouhááá is a bustling pub that encapsulates the convivial spirit of Prague's social scene. With its traditional Czech menu and lively atmosphere, this pub is a favorite among young locals. Whether you're sipping on a refreshing beer or indulging in hearty Czech cuisine, Lokál Dlouhááá offers a taste of authentic Prague hospitality.", "quirky_title": "Convivial Czech Pub" }, "geometry": { "type": "Point", "coordinates": [ 14.4257574, 50.0906931 ] } },
    { "type": "Feature", "properties": { "location_name": "Novomlýnská vodárenská věž", "neighbourhood": "Petrská čtvrť", "sub_category": "awards venue", "legend_category": "see", "address": "Nové Mlýny 827\/3A, Praha 1", "ai_description": "Discover Prague's skyline from the Novomlýnská water tower, an iconic structure that offers panoramic views of the city. Perched high above, this historic landmark invites visitors to immerse themselves in the beauty of Prague while exploring its architectural legacy.", "quirky_title": "Skyline Serenity Spot" }, "geometry": { "type": "Point", "coordinates": [ 14.4283035, 50.0923109 ] } },
    { "type": "Feature", "properties": { "location_name": "Coffee imrvére", "neighbourhood": "Žižkov", "sub_category": "café", "legend_category": "drink", "address": "Olšanské nám. 5, Praha 3", "ai_description": "Coffee imrvére is a haven for coffee connoisseurs seeking the perfect brew. This specialty coffee shop takes pride in its meticulous approach to crafting the finest cups. With a cozy atmosphere and a menu that showcases the art of coffee, Coffee imrvére is a destination where the love for caffeine reaches new heights.", "quirky_title": "Artful Coffee Haven" }, "geometry": { "type": "Point", "coordinates": [ 14.459168, 50.0820073 ] } },
    { "type": "Feature", "properties": { "location_name": "Plzeňka Olše", "neighbourhood": "Žižkov", "sub_category": "restaurant pub", "legend_category": "eat", "address": "Táboritská 26, Praha 3", "ai_description": "Plzeňka Olše is a traditional Czech pub that captures the essence of Prague's beer culture. With its rustic charm and a selection of local brews, this pub invites young travelers to immerse themselves in the authentic Czech pub experience. Plzeňka Olše is not just a place to drink; it's a celebration of the rich brewing heritage that defines Prague's social fabric.", "quirky_title": "Traditional Beer Charm" }, "geometry": { "type": "Point", "coordinates": [ 14.4575761, 50.0823089 ] } },
    { "type": "Feature", "properties": { "location_name": "Hospůdka Parukářka", "neighbourhood": "Žižkov", "sub_category": "beer garden, pub", "legend_category": "drink", "address": "Vrch sv. Kříže, Praha 3", "ai_description": "Perched on Parukářka Hill, Hospůdka Parukářka offers breathtaking views of the city. This charming pub combines panoramic scenery with a relaxed ambiance, making it a go-to spot for young locals. Whether you're enjoying a cold beer or a warm meal, Hospůdka Parukářka provides a laid-back setting for socializing with friends.", "quirky_title": "Hilltop Social Spot" }, "geometry": { "type": "Point", "coordinates": [ 14.4581989, 50.0844107 ] } },
    { "type": "Feature", "properties": { "location_name": "4. přístav vodních skautů", "neighbourhood": "Žižkov", "sub_category": "accomodation for partners", "legend_category": "chill", "address": "Pitterova 2892\/1, Praha 3", "ai_description": "Embark on a unique scouting adventure at the 5th Water Scout Hut, where boy scouts gather for regular meetings amidst a charming setting that includes a flock of sheep. This rustic retreat offers a cozy space under the attic where scouts can come together, share stories, and spend the night in camaraderie, creating lasting memories in the heart of Prague.\r\n\r\n\r\n\r\n\r\n", "quirky_title": "Sleeping sheeps" }, "geometry": { "type": "Point", "coordinates": [ 14.4663007, 50.0842246 ] } }
    ]
    }
    
    
    
    
// check desktop vs mobile
if (window.innerWidth <= 768) {
  // The user is accessing the site via a mobile device or a small screen
  alert('Apologies, the app is currently only available via desktop or wide screen view.');
} else {
  // The user is accessing the site via a desktop or a large screen
  // set up map
var map = L.map("map", { zoomControl: false }).setView([50.0894483,14.4189551], 15);

// add tiles 
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: '&copy; TEAM Křižík'
}).addTo(map);

// add custom markers
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [25, 35],
        iconAnchor:   [0,0],
        popupAnchor:  [15,0]
    }
});


var conferenceIcon = new LeafIcon({iconUrl: './img/marker-conference.png'}),
    drinkIcon = new LeafIcon({iconUrl: './img/marker-drink.png'}),
    eatIcon = new LeafIcon({iconUrl: './img/marker-eat.png'}),
    seeIcon = new LeafIcon({iconUrl: './img/marker-see.png'}),
    shopIcon = new LeafIcon({iconUrl: './img/marker-shop.png'}),
    chillIcon = new LeafIcon({iconUrl: './img/marker-chill.png'}),
    gooutIcon = new LeafIcon({iconUrl: './img/marker-go-out.png'});


var iconDic = {
    'conference':conferenceIcon,
    'drink':drinkIcon,
    'eat':eatIcon,
    'see':seeIcon,
    'shop':shopIcon,
    'go out':gooutIcon,
    'chill':chillIcon

}

// add legend
var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong style="font-family: "DM Sans", sans-serif;">Categories</strong>']

    for (var i = 0; i < Object.keys(iconDic).length; i++) { 

            div.innerHTML += 
            labels.push(
                `<i class="custom-icon" style="background-image:url('${iconDic[Object.keys(iconDic)[i]].options.iconUrl}')"></i> ${Object.keys(iconDic)[i]} `);

        }
        div.innerHTML = labels.join('<br />');
    return div;
    };
    legend.addTo(map);

// add logos
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
      var img = L.DomUtil.create("img");

      img.src = `./img/logos.png`;
      img.style.width = "450px";
      L.DomUtil.addClass(img, 'tilt');

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

      img.src = `./img/boats-title.png`;
      img.style.width = "340px";
      L.DomUtil.addClass(img, 'tilt');
      

      return img;
    },
  });

  L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
  };

  L.control.watermark({ position: "topright" }).addTo(map);

// add show all

L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
      var img = L.DomUtil.create("img");

      img.src = `./img/showall.png`;
      img.style.width = "340px";
      L.DomUtil.addClass(img, 'jump');
      L.DomUtil.addClass(img, 'point');
      img.id = 'showall';
      return img;
    },
  });

  L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
  };

  L.control.watermark({ position: "topleft" }).addTo(map);


// add let's Czeck
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
      var img = L.DomUtil.create("img");

      img.src = `./img/letsczeck.png`;
      img.style.width = "340px";
      L.DomUtil.addClass(img, 'jump');
      L.DomUtil.addClass(img, 'point');
      img.id = 'letsczeck';
      return img;
    },
  });

  L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
  };

  L.control.watermark({ position: "topleft" }).addTo(map);


// add group layer
let volumeLayer = L.featureGroup();



// click event show alll
document.getElementById("showall").addEventListener("click", function() {

    L.geoJSON(geodata, {    pointToLayer: function(feature, latlng) {
        // Use the custom icon for each feature
        return L.marker(latlng, { icon: iconDic[feature.properties.legend_category] });
    },
    onEachFeature: function(feature, layer) {
        layer.bindPopup(`<div class="dm-sans-100"><h3>${feature.properties.quirky_title}</h3></div><div class="dm-sans-200">${feature.properties.ai_description}</div> <div class="dm-sans-100" style="margin-top:10px;"><b>${feature.properties.location_name} </b>${feature.properties.sub_category} in ${feature.properties.neighbourhood}</div><div class="dm-sans-100">${feature.properties.address}</div>`);
    }}).addTo(volumeLayer);
    volumeLayer.addTo(map);
    map.flyToBounds(volumeLayer.getBounds());
}); 

  




// generalise function to find keys of smallest values
function keysOfSmallestValues(obj, numKeys) {
    const keyValuePairs = Object.entries(obj);
    keyValuePairs.sort((a,b) => a[1] - b[1]);
    const smallestKeys = keyValuePairs.slice(0, numKeys).map(pair => pair[0])
    return smallestKeys.map(kval => parseInt(kval))
}


// set selection active
var isSelectionActive = false;

// add on click trigger
map.on('click', function(e) {
    if (isSelectionActive) {
        var origin_coordinates = `${e.latlng.lng},${e.latlng.lat}`;
    var osrm_table_request_coordinates = [origin_coordinates];
    geodata['features'].forEach(function(feature) {
        osrm_table_request_coordinates.push(feature.geometry.coordinates.join(','))
    });
    var osrm_table_request = `http://router.project-osrm.org/table/v1/foot/${osrm_table_request_coordinates.join(';')}?sources=0&destinations=${[...Array(geodata.features.length).keys()].map(v => v+1).join(';')}`;
    
    fetch(osrm_table_request)
    .then(response => response.json())
    .then(data => {
        var nearest5 = keysOfSmallestValues(data.durations[0], 5);

        // loop over the indexes
        for (let i = 0; i < nearest5.length; i++) {
            var destination_coordinates = geodata.features[nearest5[i]].geometry.coordinates.join(',');
            var osrm_route_request = `http://router.project-osrm.org/route/v1/foot/${origin_coordinates};${destination_coordinates}?overview=full&geometries=geojson`;
            
            // fetch route
            fetch(osrm_route_request)
            .then(response => response.json())
            .then(data => {
                // extract geojson
                var route_geom = data.routes[0].geometry;
                L.geoJSON(route_geom).addTo(map);

            })
            .catch(error => console.error('Error:', error));
          } 
    })
    .catch(error => console.error('Error:', error));


    }
    
});



}

