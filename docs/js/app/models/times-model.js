// More description

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

    var Times = Backbone.Model.extend({
        defaults: function() {

            return {
                comment: '',
                inTime: '',
                outTime: '',
                shift: '',
                date: 'today'
            };
        }
    });

    var TimeObj = function(data) {
        this.shift = data.shift;
        this.date = data.date;

        return this;
    };

    return {
        Times: Times,
        TimeObj: TimeObj
    };
});