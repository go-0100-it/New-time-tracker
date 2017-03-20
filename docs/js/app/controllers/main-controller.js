// More description

define(['jquery', 'backbone', 'underscore', 'drawer_view', 'navbar_view', 'tracker_view', 'times_model'],
    function($, backbone, _, DrawerView, NavbarView, TrackerView, Times) {
        return {
            initialize: function() {
                $(document).ready(function() {
                    var renderNavbar = function() {
                        var navbar = new NavbarView().render();
                        $(navbar).on('clickFromNav', function(evt, clickedEl) {
                            alert('Event received from ' + clickedEl);
                            // Initialize Dropdown View
                        });
                        //return navbar;
                    };
                    var renderDrawerMenu = function() {
                        var drawerMenu = new DrawerView().render();
                        //return drawerMenu;
                    };
                    var initialRender = function() {
                        renderNavbar();
                        renderDrawerMenu();
                    }();
                });
                setTimeout(function() {
                    $.hideLoading();
                }, 2000);
            },
            renderTracker: function() {
                firebase.database().ref("AppData/last_state").once('value').then(function(snapshot) {
                    var trackerView = new TrackerView({ model: new Times.Times(snapshot.val()) }).render();
                    $.hideLoading();
                    return trackerView;
                });
            }
        };
    });