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
                 this.onClick('tracker');
             },
             onClickManageTimes: function() {
                 this.onClick('manage-times');
             },
             onClickLocations: function() {
                 this.onClick('manage-locations');
             },
             onClickTimesList: function() {
                 this.onClick('times-list');
             },
             onClickSettings: function() {
                 this.onClick('settings');
             },
             selectView: function(el) {
                 var array = ['#tracker', '#manage-times', '#manage-locations', '#times-list', '#settings']; // Test
                 var search_term = '#' + el;

                 for (var i = array.length - 1; i >= 0; i--) {
                     if (array[i] === search_term) {
                         $(array[i]).addClass('drawer-menu-item-selected');
                     } else {
                         $(array[i]).removeClass('drawer-menu-item-selected');
                     }
                 }
             },
             onClick: function(el) {
                 $('#drawer-menu-check').prop('checked', false);
                 this.selectView(el);
                 $(this).trigger('clickFromDrawerMenu', el);
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