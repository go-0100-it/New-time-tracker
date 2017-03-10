var log = function(text) {
    console.log(text);
    alert(text);
};

define(['jquery', 'main_controller' /*, 'main_controller', 'locations_controller', 'times_controller'*/ ], function($, _main, times) {

    log("PLEASE GIVE US A SECOND TO LOAD YOUR STUFF!");

    $.hideLoading();


});