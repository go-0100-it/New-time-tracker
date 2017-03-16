define([
        'jquery',
        'backbone',
        'underscore',
        'times_controller',
        'util'
    ],
    function($, Backbone, _, timesController, tpl) {
        var NavbarView = Backbone.View.extend({
            el: '#nav',
            events: {
                'click #gps': 'onClickGPS',
                'click #options-menu-btn': 'onClickOptions'
            },
            onClickOptions: function() {
                alert('You clicked the Options menu icon');
                $(this).trigger('clickFromNav', function() {
                    alert('The "Options Menu Button Click" event was received');
                });
                //timesController.createTimesView();
                //timesController.getTimesList();
            },
            initialize: function() {
                this.template = _.template(tpl.get('navbar-view'));
            },
            render: function() {
                this.$el.html(this.template());
                return this;
            }
        });
        return NavbarView;

    });