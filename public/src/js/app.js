window.$ = window.jQuery = require('jquery');
var ItemsListView = require('./views/ItemsListView');
var ItemsCollection = require('./collections/ItemsCollection');

var itemsCollection = new ItemsCollection();
var itemsListView = new ItemsListView({collection: itemsCollection});


itemsCollection.fetch();

$('#app').html(itemsListView.render().el);
