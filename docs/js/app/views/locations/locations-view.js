// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'locations_model',
        'util'
    ],
    function($, Backbone, _, Locations, tpl) {

        var LocationsView = Backbone.View.extend({
            el: '#display',
            initialize: function() {
                this.template = _.template(tpl.get('manage-locations-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return LocationsView;
    });