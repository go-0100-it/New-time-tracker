define([
        'jquery',
        'app_data_model',
        'user_model',
        'settings_view',
        'auth_view',
        'home_view'
    ],
    function($, appDataModel, User, SettingsView, AuthView, HomeView) {

        var renderSettingsView = function(showLoadingDelay) {
            var settingsView = new SettingsView().render();
            clearTimeout(showLoadingDelay);
            $.hideLoading();
            return settingsView;
        };
        var renderAuthView = function(showLoadingDelay) {
            var authView = new AuthView().render();
            clearTimeout(showLoadingDelay);
            $.hideLoading();
            return authView;
        };
        var renderHomeView = function(showLoadingDelay) {
            var homeView = new HomeView().render();
            clearTimeout(showLoadingDelay);
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