// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model'
    ],
    function($, Backbone, _, Times) {

        var TrackerView = Backbone.View.extend({
            model: new Times(),
            tagName: 'div',
            el: '#main',
            initialize: function() {
                this.template = _.template($('#tracker-view-template').html());
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return TrackerView;
    });