var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema({
  text: String,
  isCompleted: Boolean
});

module.exports = mongoose.model('Task', Task);
