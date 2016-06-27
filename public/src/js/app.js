window.$ = window.jQuery = require('jquery');
var ItemsListView = require('./views/ItemsListView');
var ItemsCollection = require('./collections/ItemsCollection');
var TagsCollection = require('./collections/TagsCollection');
var ItemModel = require('./models/ItemModel');

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

$('.student_input').submit(function(e){
  e.preventDefault();
  var $form = $(e.currentTarget);
  var content = $form.find('[name="name"]').val();
  var newItem = new ItemModel({name: content});
  newItem.save(null,{
    success: function(){
      // var updateCollection = new ItemsCollection();
      // updateCollection.fetch();
      // itemsListView({collection: updateCollection});
      // $('#app').html(itemsListView.render().el);
      itemsCollection.fetch({
        success:function(){
          itemsCollection.add(newItem);
        }
      });
    }
  });
  $('.student_input').each(function(){this.reset();});
});
