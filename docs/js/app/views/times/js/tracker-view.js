// More description

define(['jquery'], function($) {
    var trackerView = {
        'createDiv': function(text) {
            $(document).ready(function() {
                $("body").click(function() {
                    $("body").append(" <div>" + text + "</div>.");
                });
            });
        }
    };
    return trackerView;
});