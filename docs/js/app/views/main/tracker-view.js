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
            el: '#main',
            events: {
                'click #start': 'onClickStart',
                'click #finish': 'onClickFinish'
            },
            onClickStart: function() {
                alert("You clicked start");
                // var date = new Date();
                // postStartTime();
            },
            onClickFinish: function() {
                alert("You clicked finish");
            },
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
