var Backbone = require('backbone');
var TagsCollection = require('../collections/TagsCollection');

var ItemModel = Backbone.Model.extend({
  urlRoot: '/items',
  idAttribute: '_id',

  defaults: {
    name: '',
    tags: []
  },

  parse: function(item) {
    var tags = item.tags || [];
    item.tags = new TagsCollection(tags);
    return item;
  },

  toJSON: function(){
    var attributes = _.clone(this.attributes); //clone the attributes
    attributes.tags = attributes.tags.pluck('_id');  // "pluck" the `_id`s of the models in the collection
    return attributes; // return the final object
  }
});

module.exports = ItemModel;
