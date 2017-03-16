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
                this.onClick('Start');
            },
            onClickFinish: function() {
                this.onClick('Finish');
            },
            onClick: function(button) {
                alert("You clicked " + button);
                $(this).trigger('clickFromTracker', function() {
                    alert('The "' + button + ' Button Click" event was received');
                });
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