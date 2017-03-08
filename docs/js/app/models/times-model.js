// More description

require(['locations_detail_view'], function(loc) {

    var newView = loc.createView('div', 'body', ['big', 'red', 'dark'], 'box', false, false, "Hello World");
    newView.style.color = 'red';


});