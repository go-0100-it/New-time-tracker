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
                '': 'home',
                'auth': 'auth',
                'settings': 'settings',
                'tracker': 'tracker',
                'manage-times': 'manage-times',
                'manage-locations': 'manage-locations',
                'time-list': 'time-list'
            },

            'home': function() {
                var delay = this.showLoadingDelay();
                require(['app_controller'], function(AppController) {
                    if (window.userIsAuthenticated) {} else {
                        AppController.renderHomeView(delay);
                    }
                });
            },

            'auth': function() {
                var delay = this.showLoadingDelay();
                require(['app_controller'], function(AppController) {
                    if (window.userIsAuthenticated) {} else {
                        AppController.renderAuthView(delay);
                    }
                });
            },
            'settings': function() {
                var delay = this.showLoadingDelay()
                require(['app_controller'], function(AppController) {
                    if (window.userIsAuthenticated) {
                        AppController.renderSettingsView(delay);
                    } else {
                        AppController.renderAuthView(delay);
                    }
                });
            },
            'tracker': function() {
                var delay = this.showLoadingDelay();
                require(['main_controller'], function(MainController) {
                    if (window.userIsAuthenticated) {
                        MainController.renderTracker(delay);
                    } else {
                        AppController.renderAuthView(delay);
                    }
                });
            },
            'manage-times': function() {
                var delay = this.showLoadingDelay();
                require(['times_controller'], function(TimesController) {
                    if (window.userIsAuthenticated) {
                        TimesController.renderManageTimesView(delay);
                    } else {
                        AppController.renderAuthView(delay);
                    }
                });
            },
            'manage-locations': function() {
                var delay = this.showLoadingDelay();
                require(['locations_controller'], function(LocationsController) {
                    if (window.userIsAuthenticated) {
                        LocationsController.renderLocationsView(delay);
                    } else {
                        AppController.renderAuthView(delay);
                    }
                });
            },
            'time-list': function() {
                var delay = this.showLoadingDelay();
                require(['times_controller'], function(TimesController) {
                    if (window.userIsAuthenticated) {
                        TimesController.createTimesView(delay);
                    } else {
                        AppController.renderAuthView(delay);
                    }
                });
            }
        });
        Router.prototype.showLoadingDelay = function() {
                                                var delay = setTimeout(function(){
                                                    $.showLoading({ name: 'jump-pulse', allowHide: false });
                                                }, 200);
                                                return delay;
        };
        return Router;
    });