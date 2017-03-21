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
                    var itemView = new timesItemView({ model: key }).render();
                    this.$el.append(itemView.$el);
                    console.log(key.toJSON().inTimeMS);
                    itemView.$el.attr('id', key.toJSON().inTimeMS);
                }, this);

                return this;
            }
        });
        return TimesListView;
    });