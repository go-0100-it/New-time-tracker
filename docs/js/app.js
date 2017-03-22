require([
        'jquery',
        'main_controller',
        'constants',
        'util'
        /*, 'app_controller', 
            'locations_controller', 
            'times_controller'*/
    ],
    function($, main, CONSTANTS, tpl) {
        tpl.loadTemplates(['tracker-view', 'navbar-view', 'drawer-menu-view', 'times-list-view', 'times-list-item', 'settings-view', 'manage-locations-view', 'manage-times-view', 'sign-in-view'], function() {
            require(['router'], function(Router) {
                $(document).ready(function() {

                    var name, email, photoUrl, uid, emailVerified;
                    var logUser = function(user) {

                        if (user !== null) {
                            name = user.displayName;
                            email = user.email;
                            photoUrl = user.photoURL;
                            emailVerified = user.emailVerified;
                            uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
                            // this value to authenticate with your backend server, if
                            // you have one. Use User.getToken() instead.
                        }
                    };

                    firebase.auth().onAuthStateChanged(function(user) {
                        if (user) {
                            logUser(user);
                            window.userIsAuthenticated = true;
                        } else {
                            console.log('You are no longer signed in.');
                            window.userIsAuthenticated = false;
                        }
                    });
                    firebase.auth().getRedirectResult().then(function(result) {
                        if (result.credential) {
                            // This gives you a Google Access Token.
                            token = result.credential.accessToken;
                            console.log(token);
                        }
                        var user = result.user;

                    });

                    document.querySelector('#sign-in').addEventListener('click', function(e) {
                        console.log('got the click');
                        e.preventDefault();
                        e.stopPropagation();
                        // Start a sign in process for an unauthenticated user.
                        var provider = new firebase.auth.GoogleAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        firebase.auth().signInWithRedirect(provider);

                    });


                    $('#sign-out').on('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        firebase.auth().signOut().then(function(result) {

                            console.log('Goodbye ' + name);
                        }).catch(function(error) {
                            var errorCode = error.code;
                            console.error(errorCode);
                            var errorMessage = error.message;
                            console.error(errorMessage);
                            // The email of the user's account used.
                            var email = error.email;
                            console.info(email);
                            console.error('Something unforeseen has happened and ' + name + ' was not logged out.');
                        });
                    });
                });
                main.initialize();
                window.router = new Router();
                //var Router = router
            });

        });

    });