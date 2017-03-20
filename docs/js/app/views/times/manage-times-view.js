// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model',
        'util'
    ],
    function($, Backbone, _, Times, tpl) {

        var ManageTimesView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('manage-times-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return ManageTimesView;
    });