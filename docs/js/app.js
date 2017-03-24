define([

        'constants'

    ],
    function() {
        require(['util'], function(tpl) {
            tpl.loadTemplates([
                    'tracker-view',
                    'navbar-view',
                    'drawer-menu-view',
                    'times-list-view',
                    'times-list-item',
                    'settings-view',
                    'manage-locations-view',
                    'manage-times-view',
                    'sign-in-view',
                    'home-view'
                ],
                function() {
                    require([
                            'css!css/main/navbar-view.css',
                            'css!css/main/drawer-menu.css',
                            'css!css/main/dropdown-menu.css',
                            'css!css/main/tracker-view.css'
                        ],
                        function() {
                            require([
                                    'underscore',
                                    'backbone',
                                    'main_controller',
                                    'app_controller'
                                ],
                                function(_, backbone, main, app) {
                                    console.log('Rendering home view');
                                    app.renderHomeView();
                                    main.initialize();
                                    //window.router = new Router();
                                });
                        });
                });
        });
    });