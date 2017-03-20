define([
        'jquery',
        'locations_model',
        'locations_view'
    ],
    function($, Locations, LocationsView) {
        var renderLocationsView = function() {
            var locationsView = new LocationsView().render();
            $.hideLoading();
            return locationsView;
        };
        return {
            renderLocationsView: renderLocationsView
        };
    });