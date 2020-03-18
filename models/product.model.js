const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    _id:{type: Number, required: true},
    text:{type: String, required: true, max: 100},
    completed:{type: Boolean, required: true},
});


module.exports = mongoose.model('Product', ProductSchema);
