// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'app_data_model',
        'util'
    ],
    function($, Backbone, _, AppDataModel, tpl) {

        var SettingsView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('settings-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return SettingsView;
    });