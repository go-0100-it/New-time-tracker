define([
        'jquery',
        'app_data_model'
    ],
    function($, appDataModel) {
        var app = {
            'testCSSloader': function() {
                require(['css!css/times/tracker-view.css'], function() {
                    require(['tracker_view'], function(trackerView) {
                        trackerView.createDiv("Hello World");
                    });
                });
            }
        };
        return app;
    });