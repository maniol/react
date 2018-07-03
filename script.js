var movies = [
	{
		id: 1,
		title: 'Krol lew',
		desc: 'Film o krolu sawanny',
		img: 'images\\lew.jpg'
	},
	{
		id: 2,
		title: 'The isle of dog',
		desc: 'Film o psach na wysypisku',
		img: 'images\\dogs.jpg'
	},
	{
		id: 3,
		title: 'Fantastic Mr Fox',
		desc: 'Film o lisie',
		img: 'images\\fox.jpg'
	},
	{
		id: 4,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'images\\harry.jpg'
	},
	{
		id: 5,
		title: 'Transformers',
		desc: 'Film o samochodach robotach',
		img: 'images\\transformers.jpg'
	}
];
var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
				 	React.createElement('h1', {}, movie.title),
				 	React.createElement('p', {}, movie.desc),
				 	React.createElement('img', {src:movie.img})
				 );
});
var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmow'),
		React. createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));