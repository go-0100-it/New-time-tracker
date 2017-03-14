// More description

define([
        'jquery',
        'backbone',
        'underscore',
        'times_model',
        'times_collection',
        'times_item_view'
    ],
    function($, Backbone, _, Times, TimesList, timesItemView) {

        var TimesListView = Backbone.View.extend({
            el: '#times-list',
            render: function() {

                this.model.each(function(key) {
                    var itemView = new timesItemView({ model: key });
                    console.log(itemView);
                    this.$el.append(itemView.render().$el);
                }, this);

                return this;
            }
        });
        return TimesListView;
    });