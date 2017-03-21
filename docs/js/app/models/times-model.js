// More description

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {

    var Times = Backbone.Model.extend({
        calcTotalHrs: function(inTime, outTime) {
            return Math.floor(((outTime - inTime) / (60 * 60 * 1000)) * 10) / 10;
        },
        defaults: function() {

            return {
                comment: '',
                inTime: '',
                outTime: '',
                shift: '',
                date: ''
            };
        }
    });

    var TimeObj = function(data) {
        this.shift = data.shift;
        this.date = data.date;

        return this;
    };

    Times.prototype.getShiftChar = function() {
        if (this.shift) {
            return this.shift.charAt(0).toUpperCase();
        }
        return "-";
    };

    return {
        Times: Times,
        TimeObj: TimeObj
    };
});