const Post = require('mongoose').model('Posts');

//should work
exports.create_post = (req, res) => {
	const newpost = new Post(req.body);

	newpost.save((err) => {
		if (err) {
			res.send(false);
		}else {
			res.send(true);
		}
	})
}

//working
exports.get_posts = (req, res) => {
	Post.find({}, (err, posts)=> {
		if (err){
			res.send([]);
		}else{
			res.send(posts);
		}
	});
}

exports.increment_likes = (req, res)=>{
	const post_id = req.query.id;
	let post_;

	Post.findOne({_id:post_id}, (err, post)=>{
		if (!err) {
			post_ = post
		}
	});

	Post.update({_id: post_id},
		{
			author_id: post_.id,
			author_name: post_.name,
			content: post_.content,
			timestamp: post_.timestamp,
			comments: post_.comments,
			likes: post_.likes + 1
		}
	);
}
//working
exports.get_post_by_author = (req, res) => {
	const user_id = req.query.id;
	Post.find({ author_id:user_id}, (err, posts) => {
		if (err){
			res.send([]);
		}else{
			res.send(posts);
		}
	});
}

// working
exports.get_post_by_id = (req, res) => {
	const post_id = req.query.post_id;
	Post.findOne({ _id: post_id }, (err, post)=>{
		if(err){
			res.send([]);
		}else{
			res.send(post);
		}
	})
}
