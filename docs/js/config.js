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
        app: 'app',
        locations: 'app/views/locations-detail-view',
        locations_map: 'app/views/locations-map-view'
    }
    
});
// Start the main app logic.
        requirejs(['jquery', 'app', 'locations', 'locations_map'],
            function($, app, locations, locations_map) {
        });