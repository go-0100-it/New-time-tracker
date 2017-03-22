// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'user_model',
        'util'
    ],
    function($, Backbone, _, UserData, tpl) {

        var AuthView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('sign-in-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return AuthView;
    });