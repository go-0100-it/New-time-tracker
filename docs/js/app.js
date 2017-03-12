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
        console.log(tpl);
        tpl.loadTemplates(['tracker-view', 'navbar-view', 'times-detail-view', 'times-list-view'], function() {

            main.initialize();
            alert("PLEASE GIVE US A SECOND TO LOAD YOUR STUFF!");
            $.hideLoading();
        });
    });