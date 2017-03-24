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
        backbonefire: 'libs/backbonefire',
        firebase_app: 'https://www.gstatic.com/firebasejs/3.6.10/firebase-app',
        firebase_auth: 'https://www.gstatic.com/firebasejs/3.7.1/firebase-auth',
        firebase_data_base: 'https://www.gstatic.com/firebasejs/3.6.10/firebase-database',
        router: 'router',
        util: 'util',
        app: 'app',

        /* Controllers */
        app_controller: 'app/controllers/app-controller',
        main_controller: 'app/controllers/main-controller',
        locations_controller: 'app/controllers/locations-controller',
        times_controller: 'app/controllers/times-controller',
        firebase_controller: 'app/controllers/firebase-controller',

        /* Models */
        app_data_model: 'app/models/app-data-model',
        user_model: 'app/models/user-model',
        locations_model: 'app/models/locations-model',
        navbar_model: 'app/models/navbar-model',
        times_model: 'app/models/times-model',
        times_collection: 'app/models/times-collection',

        /* Views */
        // main
        drawer_view: 'app/views/main/drawer-menu-view',
        navbar_view: 'app/views/main/navbar-view',
        dropdown_view: 'app.views/main/dropdown-view',
        // locations
        locations_map_view: 'app/views/locations/locations-map-view',
        locations_view: 'app/views/locations/locations-view',

        // app-views
        home_view: 'app/views/app-views/home-view',
        settings_view: 'app/views/app-views/settings-view',
        auth_view: 'app/views/app-views/auth-view',

        // times
        times_list_view: 'app/views/times/times-list-view',
        times_item_view: 'app/views/times/times-item-view',
        times_view: 'app/views/times/times-view',
        tracker_view: 'app/views/times/tracker-view',
        manage_times_view: 'app/views/times/manage-times-view',

        // utils
        constants: 'constants'

    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }

});
// Start the main app logic.
requirejs(['firebase_app', 'firebase_auth', 'firebase_data_base'], function() {
    // Initialize Firebase
    requirejs(['auth'], function(auth) {
        var configFB = {
            apiKey: "AIzaSyBpHxEFisGuyYTf-X3GNUR-eW3KSCYlfOY",
            authDomain: "time-tracker-b63cd.firebaseapp.com",
            databaseURL: "https://time-tracker-b63cd.firebaseio.com",
            storageBucket: "time-tracker-b63cd.appspot.com",
            messagingSenderId: "22337040109"
        };
        firebase.initializeApp(configFB);
    });
});