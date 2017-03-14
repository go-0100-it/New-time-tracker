// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model'
    ],
    function($, Backbone, _, Times) {

        var TrackerView = Backbone.View.extend({
            model: new Times.Times(),
            el: '#main',
            events: {
                'click #start': 'onClickStart',
                'click #finish': 'onClickFinish'
            },
            onClickStart: function() {
                console.log("You clicked start");
                // var date = new Date();
                // postStartTime();
            },
            onClickFinish: function() {
                console.log("You clicked finish");
            },
            initialize: function() {
                this.template = _.template($('#tracker-view-template').html());
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
            remove: function() {
                this.remove();
            }
        });
        return TrackerView;
    });