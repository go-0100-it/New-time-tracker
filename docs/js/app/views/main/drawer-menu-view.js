 define([
         'jquery',
         'backbone',
         'underscore',
         'util'

     ],
     function($, Backbone, _, tpl) {
         var DrawerMenuView = Backbone.View.extend({
             el: '#drawer-menu-container',
             events: {
                 'click #tracker': 'onClickTracker',
                 'click #manage-times': 'onClickManageTimes',
                 'click #manage-locations': 'onClickLocations',
                 'click #times-list': 'onClickTimesList',
                 'click #settings': 'onClickSettings'
             },
             onClickTracker: function() {

                 $('#drawer-menu-check').prop('checked', false);

                 alert('You clicked the Tracker item');

                 $(this).trigger('clickFromDrawerMenu', function() {
                     alert('The "Tracker Item Click" event was received');
                 });

             },
             onClickManageTimes: function() {

                 $('#drawer-menu-check').prop('checked', false);

                 alert('You clicked the Manage Times item');

                 $(this).trigger('clickFromDrawerMenu', function() {
                     alert('The "The Manage Times Item Click" event was received');
                 });

             },
             onClickLocations: function() {

                 $('#drawer-menu-check').prop('checked', false);

                 alert('You clicked the Manage Locations item');

                 $(this).trigger('clickFromDrawerMenu', function() {
                     alert('The "The Manage Locations Item Click" event was received');
                 });

             },
             onClickTimesList: function() {

                 $('#drawer-menu-check').prop('checked', false);

                 alert('You clicked the Times List item');

                 $(this).trigger('clickFromDrawerMenu', function() {
                     alert('The "The Times List Item Click" event was received');
                 });

             },
             onClickSettings: function() {

                 $('#drawer-menu-check').prop('checked', false);

                 alert('You clicked the Settings item');

                 $(this).trigger('clickFromDrawerMenu', function() {
                     alert('The "Settings Item Click" event was received');
                 });

             },
             initialize: function() {
                 this.template = _.template(tpl.get('drawer-menu-view'));
             },
             render: function() {
                 this.$el.html(this.template());
                 return this;
             }
         });
         return DrawerMenuView;

     });