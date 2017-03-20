define([
        'jquery',
        'app_data_model',
        'settings_view'
    ],
    function($, appDataModel, SettingsView) {
        var renderSettingsView = function() {
            var settingsView = new SettingsView().render();
            $.hideLoading();
            return trackerView;
        };
        return {
            renderSettingsView: renderSettingsView
        };
    });