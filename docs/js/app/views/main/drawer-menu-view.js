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
             },
             onClickManageTimes: function() {
                 $('#drawer-menu-check').prop('checked', false);
                 alert('You clicked the Manage TImes item');
             },
             onClickLocations: function() {
                 $('#drawer-menu-check').prop('checked', false);
                 alert('You clicked the Manage Locations item');
             },
             onClickTimesList: function() {
                 $('#drawer-menu-check').prop('checked', false);
                 alert('You clicked the Times List item');
             },
             onClickSettings: function() {
                 $('#drawer-menu-check').prop('checked', false);
                 alert('You clicked the Settings item');
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