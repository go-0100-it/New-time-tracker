// More description

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

    var Times = Backbone.Model.extend({
        calcTotalHrs: function(inTime, outTime){
            return Math.floor(((outTime - inTime) / (60 * 60 * 1000)) * 10) / 10;
        },
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