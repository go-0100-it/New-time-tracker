// More description

define(['jquery', 'backbone', 'underscore', 'app_data_model', 'drawer_view', 'navbar_view', 'tracker_view', 'times_controller'],
    function($, backbone, _, appDataModel, DrawerView, NavbarView, TrackerView, TimesController) {

        var initialize = function() {
            $(document).ready(function() {
                var selected = "";
                var navbar = new NavbarView().render();
                var drawerMenu = new DrawerView().render();
                var tracker = new TrackerView().render();
                $(navbar).on('clickFromNav', function(evt, clickedEl) {
                    alert('Event received from ' + clickedEl);
                    // Initialize Dropdown View
                });

                $(drawerMenu).on('drawerEventDispense', function(evt, clickedElId) {
                    switch (clickedElId) {
                        case 'settings':
                            if (selected !== 'settings') {
                                selected = 'settings';
                                // Initialize App Controller
                            }
                            break;
                        case 'manage-times':
                            if (selected !== 'manage-times') {
                                selected = 'manage-times';
                                // Initialize Times controller
                            }
                            break;
                        case 'manage-locations':
                            if (selected !== 'manage-locations') {
                                selected = 'manage-locations';
                                // Initialize Locations Controller
                            }
                            break;
                        case 'times-list':
                            if (selected !== 'times-list') {
                                $.showLoading({ name: 'jump-pulse', allowHide: false });
                                selected = 'times-list';
                                TimesController.createTimesView();
                                TimesController.getTimesList();
                            }
                            break;
                        case 'tracker':
                            if (selected !== 'tracker') {
                                selected = 'tracker';
                                // Initialize Main Controller
                            }
                            break;
                        default:
                            break;
                    }
                });

                $(tracker).on('clickFromTracker', function(evt, clickedEl) {
                    alert('Event received from ' + clickedEl);
                });
            });
        };
        setTimeout(function() {
            $.hideLoading();
        }, 2000);

        return {
            initialize: initialize
        };
    });