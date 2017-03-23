define([],
    function() {
        require(['jquery'], function($) {
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
                        require([
                            'jq_loading',
                            'loading'
                        ], function(jqloading, loading) {
                            $.showLoading({ name: 'jump-pulse', allowHide: false });
                            require([
                                'app'
                            ], function(app) {});
                        });
                        token = result.credential.accessToken;
                        console.log(token);
                    }
                    var user = result.user;

                });

                $('#sign-in').on('click', function(e) {
                    $(window).trigger('clickSign-in');
                });

                $(window).on('clickSign-in', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('got the click');
                    // Start a sign in process for an unauthenticated user.
                    var provider = new firebase.auth.GoogleAuthProvider();
                    provider.addScope('profile');
                    provider.addScope('email');
                    firebase.auth().signInWithRedirect(provider);
                });

                $(window).on('clickSign-out', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    firebase.auth().signOut().then(function(result) {
                        $('#nav').hide();
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

                $('#sign-out').on('click', function(e) {
                    $(window).trigger('clickSign-out');
                });
            });
        });
    });