define([
        'jquery',
        'app_data_model',
        'user_model',
        'settings_view',
        'auth_view',
        'home_view'
    ],
    function($, appDataModel, User, SettingsView, AuthView, HomeView) {

        var renderSettingsView = function() {
            // TODO:
            // Here I will require appDataModel and SettingsView
            // Will remove from define
            var settingsView = new SettingsView().render();
            $.hideLoading();
            return settingsView;
        };
        var renderAuthView = function() {
            var authView = new AuthView().render();
            $.hideLoading();
            return authView;
        };
        var renderHomeView = function() {
            var homeView = new HomeView().render();
            $.hideLoading();
            return homeView;
        };
        var userValidated = function() {

        };
        return {
            renderSettingsView: renderSettingsView,
            renderAuthView: renderAuthView,
            renderHomeView: renderHomeView,
            userValidated: userValidated
        };
    });