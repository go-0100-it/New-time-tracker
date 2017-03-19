// More description

define(['jquery', 'backbone', 'underscore', 'times_model', 'times_collection', 'times_view', 'times_list_view', 'times_item_view', 'firebase_app', 'firebase_data_base'],
    function($, backbone, _, Times, TimesCollection, TimesView, TimesListView, TimesItemView, firebaseDB, timesController) {

        var createTimesView = function() {
            require(['css!css/times/times-detail-view.css'], function() {
                $(document).ready(function() {
                    var timesView = new TimesView().render();
                    renderTimesList();
                });
            });
        };

        var renderTimesList = function() {
            return firebase.database().ref("times").once('value').then(function(snapshot) {
                var times = (snapshot.val());

                var data = new TimesCollection([]);

                for (var time in times) {
                    var newTime = new Times.Times(times[time]);
                    data.add(newTime);
                }

                var timesList = new TimesListView({ model: data });
                timesList.render();

                $.hideLoading({ name: 'jump-pulse' });
                return timesList;
            });
        };

        return {
            createTimesView: createTimesView
        };
    });