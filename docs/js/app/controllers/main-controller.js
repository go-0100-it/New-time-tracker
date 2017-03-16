// More description

define(['jquery', 'backbone', 'underscore', 'app_data_model', 'drawer_view', 'navbar_view', 'tracker_view'],
    function($, backbone, _, appDataModel, DrawerView, NavbarView, TrackerView) {

        var initialize = function() {
            $(document).ready(function() {

                var navbar = new NavbarView().render();
                var drawerMenu = new DrawerView().render();
                var tracker = new TrackerView().render();

                $(navbar).on('clickFromNav', function(evt, func) {
                    func();
                });

                $(drawerMenu).on('clickFromDrawerMenu', function(evt, func) {
                    func();
                });

                $(tracker).on('clickFromTracker', function(evt, func) {
                    func();
                });
            });
        };

        return {
            initialize: initialize
        };
    });