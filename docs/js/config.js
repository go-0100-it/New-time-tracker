requirejs.config({
    //By default load any module IDs from js
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: 'libs/jquery-3.1.1.min',
        underscore: '_',
        backbone: '_',
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
requirejs(['jquery', 'app'],
    function($, app) {});