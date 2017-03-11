// More description

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
    var Times = Backbone.Model.extend({
        defaults: function() {
            return {
                inTime: "",
                inTimeMS: "",
                outTime: "",
                outTimeMS: "",
                date: "",
                shift: "",
                fullDate: "",
                comment: "good stuff bro!"
            };
        }
    });
    return Times;
});