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
            viewExists: false,
            render: function() {
                console.log('rendering noe times list');
                this.$el.html(this.template());
                this.viewExists = true;
                return this;
            }
        });
        return TimesView;
    });