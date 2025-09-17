const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  author_id: { type: String},
  author_name: { type: String},
  content: { type: String, default: ''},
  timestamp: { type: Date, default: ''},
  comments: {type: [String], default:[]},
  likes: { type: Number, default: 0}
});

mongoose.model('Posts', postsSchema);
