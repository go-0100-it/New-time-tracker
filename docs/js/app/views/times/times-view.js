// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model',
        'util'
    ],
    function($, Backbone, _, Times, tpl) {

        var TimesView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('times-list-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return TimesView;
    });