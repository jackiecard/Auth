/**
 * Created by jackie on 6/6/16.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var User   = new Schema({
    id: Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', User);