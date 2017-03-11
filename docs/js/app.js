define([
        'jquery',
        'main_controller',
        'constants'
        /*, 'app_controller', 
            'locations_controller', 
            'times_controller'*/
    ],
    function($, main, times, CONSTANTS) {
        main.initialize();
        //alert("PLEASE GIVE US A SECOND TO LOAD YOUR STUFF!");

        $.hideLoading();
    });