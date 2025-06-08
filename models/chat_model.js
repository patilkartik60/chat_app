const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    username: String,
    messages: String,
},
{
  timestamps: true
})

module.exports = mongoose.model('Chats', ChatSchema);