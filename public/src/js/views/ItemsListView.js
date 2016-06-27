var Backbone = require('backbone');
var ItemModel = require('../models/ItemModel');
var ItemView = require('./ItemView');

var ItemsListView = Backbone.View.extend({
  el: '<div><div id="lists"></div></div>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.renderLists();
    return this;
  },

  renderLists: function() {
    var lists = this.$('#lists');
    lists.html('');

    this.collection.each(function(item) {
      var itemView = new ItemView({model: item});
      lists.append(itemView.render().el);
    });
  }
});

module.exports = ItemsListView;
