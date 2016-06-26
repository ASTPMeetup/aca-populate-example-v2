var Backbone = require('backbone');
var _ = require('underscore');

var ItemView = Backbone.View.extend({

  el: '<ul id="items_list"></ul>',

  template: _.template([
      '<h3><%= name %></h3>',
      '<br>',
      '<ol><%= tags %></ol>',
      '<br>'
  ].join('')),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.append(this.template({
      name: this.model.get('name'),
      tags: this.model.get('tags').pluck('label').join(', ')
    }));
    return this;
  }
});

module.exports = ItemView;
