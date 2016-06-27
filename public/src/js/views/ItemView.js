var Backbone = require('backbone');
var _ = require('underscore');
var TagsListView = require('./TagsListView');

var ItemView = Backbone.View.extend({

  el: '<div class="jumbotron" id="items_jumbotron"></div>',

  template: _.template([
    '<div id="items_list">',
    '<h3><%= name %></h3>',
    '<br>',
    '<h5>Languages learned:</h5>',
    '</div>'
  ].join('')),

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
