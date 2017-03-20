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
            el: '#display',
            events: {
                'click #start': 'onClickStart',
                'click #finish': 'onClickFinish'
            },
            onClickStart: function() {
                this.onClick('Start');
            },
            onClickFinish: function() {
                this.onClick('Finish');
            },
            onClick: function(button) {
                alert("You clicked " + button);
                $(this).trigger('clickFromTracker', button);
            },
            initialize: function() {
                this.template = _.template(tpl.get('tracker-view'));
            },
            render: function() {
                console.log('rendering new tracker');
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
        });
        return TrackerView;
    });