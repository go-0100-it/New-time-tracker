define(['app_data_model', 'settings_view'], function(appDataModel, settingsView) {

    console.log('app-controller.js has successfully loaded');

    var testCSSloader = function() {
        require(['css!css/settings/settings-view.css'], function() {
            alert('Stylesheet has been loaded');
        });
    };
});