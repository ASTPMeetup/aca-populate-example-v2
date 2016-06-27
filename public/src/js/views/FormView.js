var Backbone = require('backbone');
var _ = require('underscore');
var TagModel = require('../models/TagModel');
var ItemView = require('./ItemView');

var FormView = Backbone.View.extend({
  el: '<div></div>',

  initialize: function(){
    this.model.on('change', this.render, this);
  },

  template: _.template('\
      <form name="skill_input" id="add_skill_form">\
          <input name="skill" type="text" maxlength="40" size="50" required>\
          <input type="submit" value="add skill" class="button">\
      </form><br>\
  '),

  events: {
    'submit #add_skill_form': 'addSkill'
  },

  addSkill: function(e){
    e.preventDefault();
    var $target = $(e.currentTarget).closest('div');
    var updateItemModel = this.model;
    var $form = $(e.currentTarget);
    var skillAdded = $form.find('[name="skill"]').val();
    var newTag = new TagModel({label: skillAdded});
    newTag.save(null,{
      success: function(){
        var tagList = updateItemModel.get('tags');
        tagList.add(newTag);
        updateItemModel.save();
      }
    });
    var itemView = new ItemView({model: updateItemModel});
    $target.html(itemView.el);
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = FormView;
