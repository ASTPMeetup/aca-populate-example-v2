var _ = require('underscore');
var Backbone = require('backbone');
var ItemView = require('./ItemView');

var ItemsListView = Backbone.View.extend({

  el: '<ul></ul>',

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    var $this = this;
    this.collection.each(function(tag){
      var itemView = new ItemView({model: tag});
      $this.$el.append(itemView.render().el);
    });
    return this;
  }

});

module.exports = ItemsListView;
