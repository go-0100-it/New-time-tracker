require([
        'jquery',
        'main_controller',
        'constants',
        'util'
        /*, 'app_controller', 
            'locations_controller', 
            'times_controller'*/
    ],
    function($, main, CONSTANTS, tpl) {
        tpl.loadTemplates(['tracker-view', 'navbar-view', 'drawer-menu-view', 'times-list-view', 'times-list-item', 'settings-view', 'manage-locations-view', 'manage-times-view'], function() {
            require(['router'], function(Router) {
                main.initialize();
                window.router = new Router();
                //var Router = router
            });

        });

    });