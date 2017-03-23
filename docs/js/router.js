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

            router: this,

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
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                if (window.userIsAuthenticated) {} else {
                    AppController.renderHomeView();
                }
            },

            'auth': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                if (window.userIsAuthenticated) {} else {
                    AppController.renderAuthView();
                }
            },
            'settings': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                if (window.userIsAuthenticated) {
                    AppController.renderSettingsView();
                } else {
                    AppController.renderAuthView();
                }
            },
            'tracker': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                require(['main_controller'], function(MainController) {
                    if (window.userIsAuthenticated) {
                        MainController.renderTracker();
                    } else {
                        AppController.renderAuthView();
                    }
                });
            },
            'manage-times': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                require(['times_controller'], function(TimesController) {
                    if (window.userIsAuthenticated) {
                        TimesController.renderManageTimesView();
                    } else {
                        AppController.renderAuthView();
                    }
                });
            },
            'manage-locations': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                require(['locations_controller'], function(LocationsController) {
                    if (window.userIsAuthenticated) {
                        LocationsController.renderLocationsView();
                    } else {
                        AppController.renderAuthView();
                    }
                });
            },
            'time-list': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                require(['times_controller'], function(TimesController) {
                    if (window.userIsAuthenticated) {
                        TimesController.createTimesView();
                    } else {
                        AppController.renderAuthView();
                    }
                });
            }
        });
        return Router;
    });