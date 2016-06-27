var _ = require('underscore');
var Backbone = require('backbone');
var TagView = require('./TagView');
var TagsCollection = require('../collections/tagsCollection');

var TagListView = Backbone.View.extend({

  el: '<ol class="breadcrumb" id="tags_list"><img src="../../../img/skill_add.png" id="add_skill"></ol>',

  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },



  render: function(){
    var _this = this;
    if (_this.collection.length != 0){
      _this.collection.each(function(tag){
        var tagView = new TagView({model: tag});
        _this.$el.append(tagView.render().el);
      });
    }
    else {
      var tagView = new TagView({model: this.collection});
      _this.$el.append(tagView.render().el);
    }
    return this;
  }

});

module.exports = TagListView;
