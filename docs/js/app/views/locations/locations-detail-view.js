define(["jquery"], function(JQ) {
    alert("locations-detail-view.js has been loaded");
    JQ ? alert("jquery has been required by locations-detail-view.js") : JQ = false;
    JQ ? console.log("jquery has been required by locations-detail-view.js") : JQ = false;
    console.log("locations-detail-view.js has been loaded");
    return {
        createView: function(tag, targetId, cl, id, attr, value, text) {
            if (tag && targetId) {
                var el = document.createElement(tag);
                if (cl) {
                    var len = cl.length;
                    for (var i = 0; i < len; i++) {
                        el.classList.add(cl[i]);
                    }
                }

                if (id) {
                    el.id = (id);
                }

                if (attr) {
                    var len = attr.length;
                    for (var i = 0; i < len; i++) {
                        el.setAttribute(attr[i], value[i]);
                    }
                }

                if (text) {
                    el.textContent = text;
                }
                document.getElementById(targetId).appendChild(el);
                return el;
            } else {
                console.error('The createView Method was called without required parameters. Both the tag and targetId parameters must be inputted.');
            }
        }
    }
});