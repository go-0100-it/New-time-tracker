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
                var data = this.model.toJSON();
                this.$el.html(this.template(data));
                this.$el.id = data.key;
                return this;
            }
        });
        return TimesItemView;
    });