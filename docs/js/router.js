define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, backbone) {
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
            // Gets called when there is no hashtag on the url
            console.log("My very first Backbone route");
        },
        'settings': function() {
            console.log('Called settings page');
        },
        'tracker': function() {
            console.log('Called tracker page');
        },
        'manage-times': function() {
            console.log('Called manage-times page');
        },
        'manage-locations': function() {
            console.log('Called manage-locations page');
        },
        'time-list': function() {
            console.log('Called times-list page');
        }
    });
    return new Router();
});