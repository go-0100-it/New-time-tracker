// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model'
    ],
    function($, Backbone, _, Times) {

        var TimesView = Backbone.View.extend({
            el: '#main',
            initialize: function() {
                this.template = _.template($('#times-list-view-template').html());
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return TimesView;
    });