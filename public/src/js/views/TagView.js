var _ = require('underscore');
var Backbone = require('backbone');

var TagView = Backbone.View.extend({
  el: '<li></li>',

  template: _.template('<a href="#"> <%= label %> </a>'),

  initialize: function(){
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({label: this.model.get('label')}));
    return this;
  }
});

module.exports = TagView;
