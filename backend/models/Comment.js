const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  postid: { type: String },
  author_id: { type: String, default:'' },
  author_name: { type: String, default:'' },
  content: { type: String, default: ''},
  timestamp: { type: Date, default: ''},
  likes: { type: Number, default: 0}

});mongoose.model('Comments', commentsSchema);
