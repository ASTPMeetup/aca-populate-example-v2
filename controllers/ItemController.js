var ItemModel = require('../models/ItemModel.js');

/**
* ItemController.js
*
* @description :: Server-side logic for managing items.
*/
module.exports = {

  /**
  * ItemController.list()
  */
  list: function (req, res) {
    ItemModel.find().populate('tags').exec(function (err, items) {
      if (err) {
        return res.json(500, {
          message: 'Error getting item.'
        });
      }
      return res.json(items);
    });
  },

  /**
  * ItemController.show()
  */
  show: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}).populate('tags').exec(function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error getting item.'
        });
      }
      if (!item) {
        return res.json(404, {
          message: 'No such item'
        });
      }
      return res.json(item);
    });
  },

  /**
  * ItemController.create()
  */
  create: function (req, res) {
    var item = new ItemModel({			name : req.body.name,			tags : req.body.tags
    });

    item.save(function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error saving item',
          error: err
        });
      }
      return res.json(item);
    });
  },

  /**
  * ItemController.update()
  */
  update: function (req, res) {
    var id = req.params.id;
    ItemModel.findOne({_id: id}, function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error saving item',
          error: err
        });
      }
      if (!item) {
        return res.json(404, {
          message: 'No such item'
        });
      }

      item.name = req.body.name ? req.body.name : item.name;			item.tags = req.body.tags ? req.body.tags : item.tags;
      item.save(function (err, item) {
        if (err) {
          return res.json(500, {
            message: 'Error getting item.'
          });
        }
        if (!item) {
          return res.json(404, {
            message: 'No such item'
          });
        }
        ItemModel.findOne({_id: id}).populate('tags').exec(function (err, item) {
          return res.json(item);
        });
      });
    });
  },

  /**
  * ItemController.remove()
  */
  remove: function (req, res) {
    var id = req.params.id;
    ItemModel.findByIdAndRemove(id, function (err, item) {
      if (err) {
        return res.json(500, {
          message: 'Error getting item.'
        });
      }
      return res.json(item);
    });
  }
};
