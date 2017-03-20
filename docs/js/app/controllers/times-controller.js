// More description

define(['jquery', 'backbone', 'underscore', 'times_model', 'times_collection', 'times_view', 'times_list_view', 'times_item_view', 'manage_times_view'],
    function($, backbone, _, Times, TimesCollection, TimesView, TimesListView, TimesItemView, ManageTimesView) {

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
                var times = snapshot.val();
                var data = new TimesCollection([]);

                for (var time in times) {
                    var newTime = new Times.Times(times[time]);
                    data.add(newTime);
                }

                var timesList = new TimesListView({ model: data }).render();
                $.hideLoading({ name: 'jump-pulse' });
            });
        };

        var renderManageTimesView = function() {
            var manageTimesView = new ManageTimesView().render();
            $.hideLoading({ name: 'jump-pulse' });
            return manageTimesView;
        };

        return {
            createTimesView: createTimesView,
            renderManageTimesView: renderManageTimesView
        };
    });