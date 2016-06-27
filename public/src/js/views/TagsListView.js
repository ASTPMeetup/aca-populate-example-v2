var _ = require('underscore');
var Backbone = require('backbone');
var TagView = require('./TagView');
var TagsCollection = require('../collections/tagsCollection');

var TagListView = Backbone.View.extend({

  el: '<div id="tag_list"></div>',

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    var _this = this;
    _this.collection.each(function(tag){
      var tagView = new TagView({model: tag});
      _this.$el.append(tagView.render().el);
    });
    return this;
  }

});

module.exports = TagListView;
