require([
        'jquery',
        'main_controller',
        'constants',
        'router',
        'util'
        /*, 'app_controller', 
            'locations_controller', 
            'times_controller'*/
    ],
    function($, main, CONSTANTS, router, tpl) {
        tpl.loadTemplates(['tracker-view', 'navbar-view', 'drawer-menu-view', 'times-list-view', 'times-list-item'], function() {
            console.log(router);
            var Router = router;
            main.initialize();
        });

    });