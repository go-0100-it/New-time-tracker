// More description

define(['jquery', 'backbone', 'underscore', 'app_data_model', 'drawer_view', 'navbar_view', 'tracker_view', 'times_controller'],
    function($, backbone, _, appDataModel, DrawerView, NavbarView, TrackerView, TimesController) {

        var initialize = function() {
            $(document).ready(function() {
                var renderNavbar = function() {
                    var navbar = new NavbarView().render();
                    $(navbar).on('clickFromNav', function(evt, clickedEl) {
                        alert('Event received from ' + clickedEl);
                        // Initialize Dropdown View
                    });
                    return navbar;
                };
                var views = [];
                var renderDrawerMenu = function() {
                    var selected = '#trackerView';
                    views.push(selected);
                    var drawerMenu = new DrawerView().render();
                    $(drawerMenu).on('drawerEventDispensed', function(evt, clickedElId) {
                        switch (clickedElId) {
                            case '#settings':
                                if (selected !== '#settings') {
                                    selected = '#settings';
                                    currentView = "";
                                    // Initialize App Controller
                                }
                                break;
                            case '#manage-times':
                                if (selected !== '#manage-times') {
                                    selected = '#manage-times';
                                    currentView = "";
                                    // Initialize Times controller
                                }
                                break;
                            case '#manage-locations':
                                if (selected !== '#manage-locations') {
                                    selected = '#manage-locations';
                                    // Initialize Locations Controller
                                }
                                break;
                            case '#time-list':
                                if (selected !== '#display') {
                                    $.showLoading({ name: 'jump-pulse', allowHide: false });
                                    $(selected).hide();
                                    selected = '#display';
                                    toggleView(selected, TimesController.createTimesView);
                                }
                                break;
                            case '#tracker':
                                if (selected !== '#trackerView') {
                                    $.showLoading({ name: 'jump-pulse', allowHide: false });
                                    $(selected).hide();
                                    selected = '#trackerView';
                                    toggleView(selected, renderTracker);
                                }
                                break;
                            default:
                                break;
                        }
                    });
                    return drawerMenu;
                };

                var toggleView = function(view, func) {
                    if ($.inArray(view, views) !== -1) {
                        console.log(views);
                        console.log(view + " is in the array");
                        $(view).show();
                        $.hideLoading();
                    } else {
                        views.push(view);
                        console.log('creating view');
                        func();
                    }
                };

                var hideView = function(view) {
                    console.log('hiding view');
                    $(view).addClass('hidden');
                };

                var renderTracker = function() {
                    var trackerView = new TrackerView().render();
                    $(tracker).on('clickFromTracker', function(evt, clickedEl) {
                        alert('Event received from ' + clickedEl);
                    });
                    $.hideLoading();
                    return trackerView;
                };

                var initialRender = function() {
                    renderNavbar();
                    renderDrawerMenu();
                    renderTracker();
                }();
            });
        };
        setTimeout(function() {
            $.hideLoading();
        }, 2000);

        return {
            initialize: initialize
        };
    });