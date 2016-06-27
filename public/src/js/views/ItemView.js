var Backbone = require('backbone');
var _ = require('underscore');
var TagsListView = require('./TagsListView');

var ItemView = Backbone.View.extend({

  el: '<div id="items_list"></div>',

  template: _.template('<h3><%= name %></h3>'),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.append(this.template({
      name: this.model.get('name'),
    }));
    var tagsArray = this.model.get('tags');
    var tagListView = new TagsListView({collection: tagsArray});
    this.$el.append(tagListView.render().el);

    return this;
  }
});

module.exports = ItemView;
