var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var itemSchema = new Schema({	'name' : String,	'tags' : [{	 	type: Schema.Types.ObjectId,	 	ref: 'Tag'	}]});

module.exports = mongoose.model('Item', itemSchema);
