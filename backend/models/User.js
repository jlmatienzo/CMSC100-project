const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true},
  password: { type: String, required: true },
  about: { type: String, default: ''},
  friendslist: {type:[String], default:[]}
});

mongoose.model('Users', usersSchema);
