define([
        'main_controller',
        'constants',
        'underscore',
        'backbone'
    ],
    function(main, CONSTANTS, _, backbone) {
        require(['util'], function(tpl) {
            tpl.loadTemplates(['tracker-view', 'navbar-view', 'drawer-menu-view', 'times-list-view', 'times-list-item', 'settings-view', 'manage-locations-view', 'manage-times-view', 'sign-in-view'], function() {
                console.log(tpl.templates);
                require(['css!css/main/navbar-view.css', 'css!css/main/drawer-menu.css', 'css!css/main/dropdown-menu.css'], function() {
                    require([], function() {
                        require([], function() {
                            main.initialize();
                            //window.router = new Router();
                        });
                    });
                });
            });
        });
    });