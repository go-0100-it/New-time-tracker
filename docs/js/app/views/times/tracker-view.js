/*

- will have render methods for rendering views and appending to the DOM
- will add listeners here to capture UI events and send events handled in the controller
- 


*/

require([], function() {

    var createTimesDetail = function(data) {

        var display = document.getElementById('display');
        var results = document.getElementById('results');
        var removableDiv = document.createElement('div');
        removableDiv.id = ('removable-container');

        var title = document.createElement('h1');
        title.classList.add('sub-title');
        title.id = ('times-detail-title');
        title.textContent = "Times Detail List";
        display.insertBefore(title, display.firstChild);

        for (var prop in data) {

            var inTime = data[prop].inTime;
            var outTime = data[prop].outTime;
            var shift = data[prop].shift;

            var div = document.createElement('div');
            div.classList.add("times-list-item");
            div.id = (prop);
            var shiftSpan = document.createElement('span');
            shiftSpan.classList.add('shift-span');
            shiftSpan.textContent = shift.charAt(0).toUpperCase();
            div.appendChild(shiftSpan);
            var dateSpan = document.createElement('span');
            dateSpan.classList.add('date-span');
            dateSpan.textContent = data[prop].date;
            div.appendChild(dateSpan);
            var inSpan = document.createElement('span');
            inSpan.classList.add('in-time');
            inSpan.textContent = inTime;
            div.appendChild(inSpan);
            var outSpan = document.createElement('span');
            outSpan.classList.add('out-time');
            outSpan.textContent = outTime;
            div.appendChild(outSpan);
            var totalHrs = document.createElement('span');
            totalHrs.classList.add('total-hrs');
            totalHrs.textContent = getTotalHrs(shift, data[prop].inTimeMS, data[prop].outTimeMS, data[prop].fullDate) + " hrs";
            div.appendChild(totalHrs);
            removableDiv.appendChild(div);
        };
        results.appendChild(removableDiv);
        show_hideElement('display');
    };
    return this;
});