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
        app_controller: 'app/controllers/app-controller',
        locations_controller: 'app/controllers/locations-controller',
        times_controller: 'app/controllers/times-controller',
        app_data_model: 'app/models/app-data-model',
        locations_model: 'app/models/locations-model',
        times_model: 'app/models/times-model',
        locations_detail_view: 'app/views/locations-detail-view',
        locations_map_view: 'app/views/locations-map-view',
        locations_view: 'app/views/locations-view',
        settings_view: 'app/views/settings-view',
        tracker_view: 'app/views/tracker-view',
        times_detail_view: 'app/views/times-detail-view'

    }

});
// Start the main app logic.
requirejs(['jquery', 'app'],
    function($, app) {});