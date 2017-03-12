// More description

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
    var Times = Backbone.Model.extend({
        defaults: function() {
            return {
                inTime: "",
                inTimeMS: "",
                outTime: "",
                outTimeMS: "",
                date: "Today",
                shift: "",
                fullDate: "",
                comment: "good stuff bro!"
            };
        }
    });
    return Times;
});