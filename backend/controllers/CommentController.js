const Comment = require('mongoose').model('Comments');


//should work
exports.create_comment = (req, res)=> {
	const newcomment = new Comment(req.body);

	newcomment.save((err, comment) => {
		if (err) {
			res.send(false);
		}else {
			res.send(true);
		}
	});
}

exports.get_comment_by_id = (req, res) => {
	const comment_id = req.query.comment_id;
	Comment.findOne({ _id: post_id }, (err, comment)=>{
		if(err){
			res.send([]);
		}else{
			res.send(comment);
		}
	})
}

//not tested
exports.get_comments = (req, res) => {
	const post_id = req.query.post_id;
	Comment.find({postid: post_id}, (err, comments)=> {
		if (err){
			res.send([]);
		}else {
			res.send(comments);
		}
	})
}
