var Backbone = require('backbone');
var ItemModel = require('../models/ItemModel');
var ItemView = require('./ItemView');

var ItemsListView = Backbone.View.extend({
  el: '<div><div id="lists"></div></div>',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'update', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },

  // template: _.template([
  //   '<form name="student_input" class="student_input">',
  //     '<input name="name" type="text" class="name_input" maxlength="40" size="40" required><br><br>',
  //     '<input type="submit" value="Add student" class="button">',
  //   '</form>'
  //   ].join('')),
  //
  // events: {
  //   "submit #item_input": "addItem"
  // },
  //
  // addItem: function(e){
  //   e.preventDefault();
  //   var addModel = this.collection;
  //   var $form = $(e.currentTarget);
  //   var formText = $form.find('[name="name"]').val();
  //   var listItem = new ItemModel({name: formText});
  //   listItem.save(null,{
  //     success: function(){
  //       var itemsList = addModel.get('tags');
  //       itemsList.add(listItem);
  //       updateModel.save();
  //     }
  //   });
  // },

  render: function() {
    this.renderLists();
    return this;
  },

  renderLists: function() {
    var lists = this.$('#lists');
    lists.html('');

    this.collection.each(function(item) {
      var itemView = new ItemView({model: item});
      lists.append(itemView.render().el);
    });
  }
});

module.exports = ItemsListView;
