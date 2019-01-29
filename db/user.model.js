const mongoose = require('./connection');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // _id         : Schema.Types.ObjectId,
    first_name  : { type: String, require: true, min: 2 },
    last_name   : { type: String, require: true, min: 2 },
    email       : { type: String, require: [true, 'Email is required!'], unique: true },
    password    : { type: String, require: true},
    phone       : { type: String,  validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        }}}
});





module.exports = mongoose.model('User', UserSchema);
