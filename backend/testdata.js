use sns;

db.users.insertMany([
	{
		email: "mccarandang@up.edu.ph",
		name: "Monina Carandang",
		password: "asdasd",
		about: "Ganda"
	},
	{
		email: "jjmatienzo@up.edu.ph",
		name: "John Louie Matienzo",
		password: "luv you mam nina",
		about: "Bimbi I offer you my PE. Let me pass my other subjects "
	},
	{
		email: "jmafunggol@up.edu.ph",
		name: "Josel Afunggol",
		password: "rubik's",
		about: "stat over chemEng"},
	{
		email: "amfadul1@up.edu.ph",
		name: "Alvin Jeremy Fadul",
		password: "doge",
		about: ""
	},
	{
		email: "jmgustilo@up.edu.ph",
		name: "Jan Ian Alastaire Gustilo",
		password: "lynette",
		about: "Frat is life"
	},
	{
		email: "kfdailo@up.edu.ph",
		name: "Karl Zhimon Dailo",
		password: "FinalFantasyDissidia",
		about: "Your Lie In April made me cry"
	},
	{
		email: "jbcaday@up.edu.ph",
		name: "John Howelle Caday",
		password: "tinderella",
		about: "graduatenaakohaha!",
		friendslist: []
	}
])

db.posts.insertMany([
	{
		author_id: "5a1a5f01abeaec796529936f",
		author_name: "Karl Zhimon Dailo",
		content: "playing Cuphead",
		timestamp: '',
		comments: [],
		likes: 0
	},

	{
		author_id: "5a1a5f01abeaec796529936a",
		author_name: "Monina Carandang",
		content: "Lorem Ipsum dolor dondondondondondondon",
		timestamp: '',
		comments: [],
		likes: 0
	},
	{
		author_id: "5a1a5f01abeaec796529936d",
		author_name: "Alvin Jeremy Fadul",
		content: "I love my 2d waifu",
		timestamp: '',
		comments: [],
		likes: 0
	}
]);

db.comments.insertMany([
	{
		author: ,
		content: ,
		timestamp: ,
		likes: 0
	},
]);
