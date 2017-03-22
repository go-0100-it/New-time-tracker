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
                'auth': 'auth',
                'settings': 'settings',
                'tracker': 'tracker',
                'manage-times': 'manage-times',
                'manage-locations': 'manage-locations',
                'time-list': 'time-list'

            },

            'auth': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log("Login requested");
                AppController.renderAuthView();
                $(window).trigger('viewSelected', ['#auth']);
            },
            'home': function() {
                $.showLoading({ name: 'jump-pulse', allowHide: false });
                console.log("My very first Backbone route");
                MainController.renderTracker();
                $(window).trigger('viewSelected', ['#tracker']);
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
                $(window).trigger('viewSelected', ['#tracker']);
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