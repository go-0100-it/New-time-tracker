// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model',
        'util'
    ],
    function($, Backbone, _, Times, tpl) {

        var TimesItemView = Backbone.View.extend({
            model: new Times.Times(),
            tagName: 'li',
            className: 'times-list-item',
            id: "1",
            events: {
                'click #shift': 'onClickShift',
                'click #date': 'onClickDate',
                'click #in': 'onClickIn',
                'click #out': 'onClickOut',
                'click #hrs': 'onClickHrs'
            },
            onClickShift: function() {
                console.log("You clicked the shift");
                // var date = new Date();
                // postStartTime();
            },
            onClickDate: function() {
                console.log("You clicked the date");
            },
            onClickIn: function() {
                console.log("You clicked the in time");
                // var date = new Date();
                // postStartTime();
            },
            onClickOut: function() {
                console.log("You clicked the out time");
                // var date = new Date();
                // postStartTime();
            },
            onClickHrs: function() {
                console.log("You clicked the hrs");
            },
            initialize: function() {
                this.template = _.template(tpl.get('times-list-item'));
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return TimesItemView;
    });