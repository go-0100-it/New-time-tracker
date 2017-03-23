// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'user_model',
        'util'
    ],
    function($, Backbone, _, UserData, tpl) {

        var HomeView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('home-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return HomeView;
    });