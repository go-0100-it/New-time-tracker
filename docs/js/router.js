define([
        'jquery',
        'underscore',
        'backbone',
        'main_controller',
        'times_controller',
        'locations_controller',
        'app_controller'
    ],
    function($, _, backbone, MainController, TimesController, LocationsController, AppController) {
        var Router = Backbone.Router.extend({
            // Constructor
            initialize: function() {

                //Required for Backbone to start listening to hashchange events
                Backbone.history.start();
            },

            routes: {

                // Calls the home method when there is no hashtag on the url
                '': 'home',
                'settings': 'settings',
                'tracker': 'tracker',
                'manage-times': 'manage-times',
                'manage-locations': 'manage-locations',
                'time-list': 'time-list'

            },

            'home': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log("My very first Backbone route");
                MainController.renderTracker();
            },
            'settings': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log('Called settings page');
                AppController.renderSettingsView();
            },
            'tracker': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log('Called tracker page');
                MainController.renderTracker();
            },
            'manage-times': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log('Called manage-times page');
                TimesController.renderManageTimesView();
            },
            'manage-locations': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log('Called manage-locations page');
                LocationsController.renderLocationsView();
            },
            'time-list': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log('Called times-list page');
                TimesController.createTimesView();
            }
        });
        return Router;
    });