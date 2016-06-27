window.$ = window.jQuery = require('jquery');
var ItemsListView = require('./views/ItemsListView');
var ItemsCollection = require('./collections/ItemsCollection');
var TagsCollection = require('./collections/TagsCollection');

var itemsCollection = new ItemsCollection();
var tagsCollection = new TagsCollection();

itemsCollection.fetch({
  success: function(){
    tagsCollection.fetch({
      success: function(){
        var itemsListView = new ItemsListView({collection: itemsCollection});
        $('#app').html(itemsListView.render().el);
      }
    });
  }
});
