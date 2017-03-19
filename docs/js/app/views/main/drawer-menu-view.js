 define([
         'jquery',
         'backbone',
         'underscore',
         'router',
         'util'

     ],
     function($, Backbone, _, router, tpl) {
         var DrawerMenuView = Backbone.View.extend({
             el: '#drawer-menu-container',
             events: {
                 'click #tracker': 'onClickTracker',
                 'click #manage-times': 'onClickManageTimes',
                 'click #manage-locations': 'onClickLocations',
                 'click #time-list': 'onClickTimesList',
                 'click #settings': 'onClickSettings'
             },
             onClickTracker: function() {
                 this.invokeRouter('#tracker');
             },
             onClickManageTimes: function() {
                 this.invokeRouter('#manage-times');
             },
             onClickLocations: function() {
                 this.invokeRouter('#manage-locations');
             },
             onClickTimesList: function() {
                 this.invokeRouter('#time-list');
             },
             onClickSettings: function() {
                 this.invokeRouter('#settings');
             },
             invokeRouter: function(el) {
                 var $li = $(el);
                 router.navigate($li.attr('data-url'), { trigger: true });
                 $('#drawer-menu-check').prop('checked', false);
                 var array = ['#tracker', '#manage-times', '#manage-locations', '#time-list', '#settings']; // Test
                 for (var i = array.length - 1; i >= 0; i--) {
                     if (array[i] === el) {
                         $(array[i]).addClass('drawer-menu-item-selected');
                     } else {
                         $(array[i]).removeClass('drawer-menu-item-selected');
                     }
                 }
                 $(this).trigger('drawerEventDispensed', el);
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