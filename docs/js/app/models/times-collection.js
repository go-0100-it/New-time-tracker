// More description

define(['jquery', 'backbone', 'underscore', 'times_model'], function($, Backbone, _, Times) {
    var TimesList = Backbone.Collection.extend({
        model: Times.Times,
        url: 'https://time-tracker-b63cd.firebaseio.com/times'
    });
    return TimesList;
});