define([
        'jquery',
        'main_controller',
        'constants',
        'util'
        /*, 'app_controller', 
            'locations_controller', 
            'times_controller'*/
    ],
    function($, main, CONSTANTS, tpl) {
        tpl.loadTemplates(['tracker-view', 'navbar-view', 'drawer-menu-view', 'times-list-view', 'times-list-item'], function() {
            main.initialize();
        });

    });