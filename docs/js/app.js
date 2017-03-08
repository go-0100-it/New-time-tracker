// More description

define(['locations_detail_view'], function(loc) {

    var newView = loc.createView('div', 'body', ['big', 'red', 'dark'], 'box', false, false, "Hello World");
    newView.style.color = 'red';


});

/*

This module will require app-controller.js
will require locations-controller.js
will require times-controller.js

 */