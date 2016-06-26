var Backbone = require('backbone');
var ItemModel = require('../models/ItemModel');

var ItemsCollection = Backbone.Collection.extend({
  url: '/items',
  model: ItemModel
});

module.exports = ItemsCollection;
