// More description

define(['jquery', 'backbone', 'underscore', 'app_data_model', 'drawer_view', 'main_view', 'navbar_view', 'tracker_view'],
    function($, backbone, _, appDataModel, drawerView, mainView, navbarView, TrackerView) {

        var initialize = function() {
            $(document).ready(function() {
                var myView = new TrackerView();
                myView.render();
            });
        };

        return {
            initialize: initialize
        };
    });