define([
        'jquery',
        'underscore',
        'backbone',
        'main_controller',
        'times_controller',
        'locations_controller',
        'app_controller'
    ],
    function($, _, backbone, MainController, TimesController, LocationsController, AppController) { // TODO: Need to require USER
        var Router = Backbone.Router.extend({
            // Constructor
            initialize: function() {

                //Required for Backbone to start listening to hashchange events
                Backbone.history.start();
            },

            routes: {

                // Calls the home method when there is no hashtag on the url
                'auth': 'auth',
                'settings': 'settings',
                'tracker': 'tracker',
                'manage-times': 'manage-times',
                'manage-locations': 'manage-locations',
                'time-list': 'time-list'

            },

            'auth': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log("Login requested"); // ***** REMOVE *****
                AppController.renderAuthView();
            },
            'settings': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                if (window.userIsAuthenticated) {
                    console.log(this.UserIsAuthenticated);
                    AppController.renderSettingsView();
                } else {
                    window.router.navigate('auth', { trigger: true });
                }
            },
            'tracker': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                /* TODO:
                    Change to...
                                     ***  Also need to mover rendering of tracker view to MainController
                    
                */
                require(['main_controller'], function(MainController) {
                    if (window.userIsAuthenticated) {
                        MainController.renderTracker();
                    } else {
                        window.router.navigate('auth', { trigger: true });
                    }
                })


                // console.log('Called tracker page'); // ***** REMOVE *****
                // MainController.renderTracker(); // ***** REMOVE *****
            },
            'manage-times': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                /* TODO:
                    Change to...
                    
                */
                require(['times_controller'], function(TimesController) {
                    if (window.userIsAuthenticated) {
                        TimesController.renderManageTimesView();
                    } else {
                        window.router.navigate('auth', { trigger: true });
                    }
                })

                // console.log('Called manage-times page'); // ***** REMOVE *****
                // TimesController.renderManageTimesView(); // ***** REMOVE *****
            },
            'manage-locations': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                /* TODO:
                    Change to...
                    
                */
                require(['locations_controller'], function(LocationsController) {
                    if (window.userIsAuthenticated) {
                        LocationsController.renderLocationsView();
                    } else {
                        window.router.navigate('auth', { trigger: true });
                    }
                })

                // console.log('Called manage-locations page'); // ***** REMOVE *****
                // LocationsController.renderLocationsView(); // ***** REMOVE *****
            },
            'time-list': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                /* TODO:
                    Change to...
                                */
                require(['times_controller'], function(TimesController) {
                    if (window.userIsAuthenticated) {
                        TimesController.createTimesView();
                    } else {
                        window.router.navigate('auth', { trigger: true });
                    }
                })


                // console.log('Called times-list page'); // ***** REMOVE *****
                // TimesController.createTimesView(); // ***** REMOVE *****
            }
        });
        return Router;
    });