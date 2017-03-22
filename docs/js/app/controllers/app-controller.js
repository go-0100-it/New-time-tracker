define([
        'jquery',
        'app_data_model',
        'user_model',
        'settings_view',
        'auth_view'
    ],
    function($, appDataModel, User, SettingsView, AuthView) {

        var renderSettingsView = function() {
            // TODO:
            // Here I will require appDataModel and SettingsView
            // Will remove from define
            var settingsView = new SettingsView().render();
            $.hideLoading();
            return renderSettingsView;
        };
        var renderAuthView = function() {
            var authView = new AuthView().render();
            $.hideLoading();
            return authView;
        };
        var userValidated = function() {

        };
        return {
            renderSettingsView: renderSettingsView,
            renderAuthView: renderAuthView,
            userValidated: userValidated
        };
    });