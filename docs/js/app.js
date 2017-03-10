define(['jquery', 'app_controller', 'main_controller', 'locations_controller', 'times_controller'], function($, app, main, loc, times) {

    console.log('App js loaded successfully');
    alert("ALL DEPENDANTS WERE SUCCESSFULLY LOADED!")

    if ($) {
        console.log('Jquery is available in app.js');
    } else {
        console.log('Jquery is NOT available in app.js');
    }

});