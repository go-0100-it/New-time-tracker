define([
        'jquery',
        'backbone',
        'underscore'
    ],
    function($, Backbone, _, Navbar) {

        var NavbarView = Backbone.View.extend({
            el: '#nav',
            events: {
                'click #gps': 'onClickGPS',
                'click #options-menu-btn': 'onClickOptions'
            },
            onClickGPS: function() {
                console.log('You clicked the GPS icon');
            },
            onClickOptions: function() {
                console.log('You clicked the Options menu icon');
            },
            initialize: function() {
                this.template = _.template($('#navbar-view-template').html());
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return NavbarView;

    });