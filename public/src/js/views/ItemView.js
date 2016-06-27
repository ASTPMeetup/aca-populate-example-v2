var Backbone = require('backbone');
var _ = require('underscore');
var TagsListView = require('./TagsListView');
var FormView = require('./FormView');

var ItemView = Backbone.View.extend({

  el: '<div class="jumbotron" id="items_jumbotron"></div>',

  template: _.template([
    '<div id="items_list">',
    '<h3><%= name %></h3>',
    '<a href="#"><span id="remove">remove</span></a>',
    '<br><br>',
    '<h5>Languages learned:</h5>',
    '<div id="appendForm"></div>',
    '</div>'
  ].join('')),

  events: {
    'click #add_skill': 'skill_add_form',
    'click #remove': 'removeStudent'
  },

  skill_add_form: function(e){
    e.preventDefault();
    var $targetList = $(e.currentTarget).parent();
    $targetList.remove();
    this.renderFormView();
  },

  removeStudent: function() {
    this.model.destroy();
  },

  // initialize: function(){
  //   this.listenTo(this.model, 'change', this.render);
  //   this.listenTo(this.model, 'sync', this.render);
  // },

  render: function(){
    this.$el.append(this.template({
      name: this.model.get('name'),
    }));
    var tagsArray = this.model.get('tags');
    var tagListView = new TagsListView({collection: tagsArray});
    this.$el.append(tagListView.render().el);

    return this;
  },

  renderFormView : function(){
    var formView = new FormView({model: this.model});
    this.$el.append(formView.render().el);
  }
});

module.exports = ItemView;
