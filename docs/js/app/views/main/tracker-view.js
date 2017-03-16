// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model',
        'util'
    ],
    function($, Backbone, _, Times, tpl) {

        var TrackerView = Backbone.View.extend({
            model: new Times.Times(),
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
                this.template = _.template(tpl.get('tracker-view'));
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