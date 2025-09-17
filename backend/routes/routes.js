const router = require('express').Router();
const CommentController = require('../controllers/CommentController');
const PostController = require('../controllers/PostController');
const UserController = require('../controllers/UserController');


router.post('/login', UserController.login);
router.post('/signup', UserController.signup);
// router.post('/profile/edit', Controller.edit_profile);

router.get('/users', UserController.get_users);					//used for searching
router.get('/profile', UserController.get_user);				//needs id param	//returns details of user id
router.get('/profile/friends', UserController.get_friends);		//needs id param	//returns all friends of user id

router.post('/create_post', PostController.create_post);
router.get('/profile/posts', PostController.get_post_by_author); //needs id param	//returns all posts by author id
router.get('/posts', PostController.get_posts);
router.get('/post', PostController.get_post_by_id);
router.get('/inc_like', PostController.increment_likes);

router.post('/post/create_comment', CommentController.create_comment);
router.get('/post/comment', CommentController.get_comment_by_id); //needs comment_id param //used for updating like count
router.get('/post/comments', CommentController.get_comments);		//needs postid param

module.exports = router;
