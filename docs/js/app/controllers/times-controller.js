// More description

define(['jquery', 'backbone', 'underscore', 'times_model', 'times_detail_view'],
    function($, backbone, _, timesModel, TimesDetailView) {

        var initialize = function() {
            $(document).ready(function() {
                new TimesDetailView().render();
            });
        };

        return {
            initialize: initialize
        };
    });