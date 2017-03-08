require(['locations_detail_view'], function(location) {

    console.log("locations-map-view.js Loaded successfully");
    if (location) {
        console.log('Locations-detail-view.js available in locations-map-view.js');
    } else {
        console.log('Locations-detail-view.js NOT available in locations-map-view.js');
    }

    if ($) {
        console.log('Jquery is available in locations-map-view.js');
    } else {
        console.log('Jquery is NOT available in locations-map-view.js');
    }

});