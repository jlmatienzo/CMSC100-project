const User = require('mongoose').model('Users');

//not tested
exports.signup = (req, res) => {
	const newuser = new User(req.body);
	newuser.save((err, user) => {
		if (err) {
			res.send(false);
		}else {
			res.send(true);
		}
	});
}


//not tested
exports.login = (req, res) => {
	console.log("in login");
	const user_login = new User(req.body);
	User.find({email: user_login.email}, (err, user) => {
		if (err){
			res.send(false);
		}else{
			if (user_login.password === user.password){
				res.send(true);
			}else{
				res.send(false);
			}
		}
	})
}

// exports.edit_profile = (req, res) => {
// 	const id = req.query.id
// 	User.update({_id: id}, (err) => {
// 	})
// }


//working
exports.get_user = (req, res) => {
	const id = req.query.id;

	User.findOne({ _id: id }, (err, user) => {
		if (err) {
			console.log(err);
			res.send({});
		} else {
			res.send(user);
		}
	});
}

//working
exports.get_users = (req, res) => {
	User.find({}, (err, users) => {
		if(err){
			console.log(err);
			res.send({});
		}else{
			res.send(users);
		}
	});
}

//working
exports.get_friends = (req, res) => {
	const user_id = req.params.id;

	User.find({_id:user_id}, (err, user)=>{
		if (err){
			res.send([]);
		}else {
			console.log(user._id)
			console.log(user.name)
			res.send(user.friendslist);
		}
	});
}
