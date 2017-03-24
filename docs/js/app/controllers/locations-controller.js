define([
        'jquery',
        'locations_model',
        'locations_view'
    ],
    function($, Locations, LocationsView) {
        var renderLocationsView = function(showLoadingDelay) {
            var locationsView = new LocationsView().render();
            clearTimeout(showLoadingDelay);
            $.hideLoading();
            return locationsView;
        };
        return {
            renderLocationsView: renderLocationsView
        };
    });