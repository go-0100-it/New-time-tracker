 define([
         'jquery',
         'backbone',
         'underscore',
         'util',
         'router',
         'auth'

     ],
     function($, Backbone, _, tpl, Router, auth) {
         var router = new Router();
         var DrawerMenuView = Backbone.View.extend({
             el: '#drawer-menu-container',
             events: {
                 'click #tracker': 'onClickTracker',
                 'click #manage-times': 'onClickManageTimes',
                 'click #manage-locations': 'onClickLocations',
                 'click #time-list': 'onClickTimesList',
                 'click #settings': 'onClickSettings',
                 'click #auth': 'onClickAuth'
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
             onClickAuth: function() {
                 this.invokeRouter('#auth');
                 $(window).trigger('clickSign-out');
             },
             invokeRouter: function(el) {
                 var $li = $(el);
                 router.navigate($li.attr('data-url'), { trigger: true });
                 this.toggleSelection(el);
             },
             viewShowing: '',
             toggleSelection: function(el) {
                 $('#drawer-menu-check').prop('checked', false);
                 var array = ['#tracker', '#manage-times', '#manage-locations', '#time-list', '#settings', '#auth'];
                 for (var i = 0; i < array.length; i++) {
                     if (array[i] === el) {
                         $(array[i]).addClass('drawer-menu-item-selected');
                     } else {
                         $(array[i]).removeClass('drawer-menu-item-selected');
                     }
                 }
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