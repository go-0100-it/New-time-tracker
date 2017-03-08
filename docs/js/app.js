require(['./jquery','./locations'], function($, loc){

    console.log('App js loaded successfully');

if ($) {
        console.log('Jquery is available in app.js');
    } else {
        console.log('Jquery is NOT available in app.js');
    }
    var newView = loc.createView('div','body', ['big', 'red', 'dark'], 'box', false, false, "Hello World");
    newView.style.color = 'red';
});

