requirejs.config({
    //By default load any module IDs from js
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        /* Libraries */
        jquery: 'libs/jquery-3.1.1.min',
        jq_loading: 'libs/jquery.loading.min',
        loading: 'libs/loading.min',
        underscore: 'libs/underscore.js-1.8.3.min',
        backbone: 'libs/backbone.min',
        firebase_app: 'https://www.gstatic.com/firebasejs/3.6.10/firebase-app',
        firebase_data_base: 'https://www.gstatic.com/firebasejs/3.6.10/firebase-database',
        app: 'app',

        /* Controllers */
        app_controller: 'app/controllers/app-controller',
        main_controller: 'app/controllers/main-controller',
        locations_controller: 'app/controllers/locations-controller',
        times_controller: 'app/controllers/times-controller',

        /* Models */
        app_data_model: 'app/models/app-data-model',
        locations_model: 'app/models/locations-model',
        times_model: 'app/models/times-model',

        /* Views */
        // main
        main_view: 'app/views/main/js/main-view',
        drawer_view: 'app/views/main/js/drawer-menu-view',
        navbar_view: 'app/views/main/js/navbar-view',

        // locations
        locations_detail_view: 'app/views/locations/js/locations-detail-view',
        locations_map_view: 'app/views/locations/js/locations-map-view',
        locations_view: 'app/views/locations/js/locations-view',

        // settings
        settings_view: 'app/views/settings/js/settings-view',

        // times
        tracker_view: 'app/views/times/js/tracker-view',
        times_detail_view: 'app/views/times/js/times-detail-view'

    }

});
// Start the main app logic.
requirejs(['jquery'], function($) {
    requirejs(['loading', 'jq_loading'], function() {
        $.showLoading({ name: 'jump-pulse', allowHide: false });
        requirejs(['app', 'underscore', 'backbone', 'firebase_app', 'firebase_data_base'], function(app, underscore, backbone, fb_app, fbdb) {
            // Initialize Firebase
            var configFB = {
                apiKey: "AIzaSyBpHxEFisGuyYTf-X3GNUR-eW3KSCYlfOY",
                authDomain: "time-tracker-b63cd.firebaseapp.com",
                databaseURL: "https://time-tracker-b63cd.firebaseio.com",
                storageBucket: "time-tracker-b63cd.appspot.com",
                messagingSenderId: "22337040109"
            };
            firebase.initializeApp(configFB);
            $.hideLoading();
        });
    });
});