/* 

requires times-model.js
requires tracker-view.js
requires times-detail-view.js

- 


*/

define(['times_model', 'tracker_view', 'times_detail_view'],
    function(timesModel, trackerView, timesDetailView) {

        var alertNLogOk = function() {
            alert('All required files have been successfully defined for times_controller.js');
            console.log('All required files have been successfully defined for times_controller.js');
        };

        var alertNLogNG = function() {
            alert('ERROR  defining files for times_controller.js');
            console.log('ERROR  defining files for times_controller.js');
        };

        timesModel && trackerView && timesDetailView ? alertNLogOk() : alertNLogNG();

        return this;
    });