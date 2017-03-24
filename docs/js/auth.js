define([],
    function() {
        require(['jquery'],
            function($) {
                require([
                        'jq_loading',
                        'css!css/loading.css'
                    ],
                    function() {
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

                            $('#sign-in').on('click', function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                var showLoadingDelay =
                                    setTimeout(function(){
                                        console.log('still would have shown')
                                    $.showLoading({ name: 'jump-pulse', allowHide: false });
                                }, 300);
                                $(window).trigger('clickSign-in', showLoadingDelay);
                            });

                            $(window).on('clickSign-in', function(e, showLoadingDelay) {
                                console.log('got the click');
                                // Start a sign in process for an unauthenticated user.
                                var provider = new firebase.auth.GoogleAuthProvider();
                                provider.addScope('profile');
                                provider.addScope('email');
                                firebase.auth().signInWithPopup(provider).then(function(result) {
                                    // This gives you a Google Access Token. You can use it to access the Google API.
                                    require(['app'], function(app) {
                                        clearTimeout(showLoadingDelay);
                                        var token = result.credential.accessToken;
                                        // The signed-in user info.
                                        var user = result.user;
                                    });

                                    // ...
                                }).catch(function(error) {
                                    console.error(error.code);
                                    console.error(error.message);
                                    // The email of the user's account used.
                                    console.error(error.email);
                                    // The firebase.auth.AuthCredential type that was used.
                                    console.error(error.credential);
                                    // ...
                                });
                            });

                            $(window).on('clickSign-out', function(e) {
                                firebase.auth().signOut().then(function(result) {
                                    require(['app'], function(app) {
                                        console.log('Goodbye ' + name);
                                        location.reload(true);
                                    });
                                }).catch(function(error) {
                                    console.error('Something unforeseen has happened and ' + name + ' was not logged out.');
                                    console.error(error.code);
                                    console.error(error.message);
                                    console.error(error.email);
                                });
                            });

                            $('#sign-out').on('click', function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                $(window).trigger('clickSign-out');
                            });
                        });
                    });
            });
    });