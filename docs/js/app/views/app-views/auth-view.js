// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'user_model',
        'util',
        'auth'
    ],
    function($, Backbone, _, UserData, tpl, auth) {

        var AuthView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('sign-in-view'));
            },
            events: {
                'click #sign-in': 'onSignInClick',
                'click #sign-out': 'onSignOutClick'
            },
            onSignInClick: function() {
                $(window).trigger('clickSign-in');
            },
            onSignOutClick: function() {
                $(window).trigger('clickSign-out');
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return AuthView;
    });