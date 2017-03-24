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
            renderTracker: function(showLoadingDelay) {
                firebase.database().ref("AppData").once('value').then(function(snapshot) {
                    var times = snapshot.val();
                    var status = times.app_state.status;
                    console.log(status);
                    var trackerView = new TrackerView({ model: new Times.Times(times.last_state) }).render(status);
                    clearTimeout(showLoadingDelay);
                    $.hideLoading();
                    return trackerView;
                });
            }
        };
    });