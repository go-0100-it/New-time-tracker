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
            render: function(last_state) {
                this.$el.html(this.template(this.model.toJSON()));
                switch (last_state) {
                    case 'idol':
                        this.disableElements(['#new', '#finish']);
                        break;
                    case 'tracking':
                        var msg = 'rendering tracking tracker';
                        this.disableElements(['#inTime', '#shift-type', '#date-input', '#start']);
                        this.hideElements(['#new']);
                        break;
                    case 'finished':
                        this.disableElements(['#inTime', '#outTime', '#shift-type', '#date-input', '#text']);
                        this.hideElements(['#start', '#finish']);
                        break;
                    default:
                        break;
                }
                return this;
            },
            hideElements: function(els) {
                var len = els.length;
                for (var i = 0; i < len; i++) {
                    this.$el.find(els[i]).addClass('hidden');
                }
            },
            disableElements: function(els) {
                var len = els.length;
                for (var i = 0; i < len; i++) {
                    $(els[i]).prop('disabled', true);
                }
            }
        });
        return TrackerView;
    });