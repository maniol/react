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


var MoviePoster = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function(){
		return React.createElement('img', {src:this.props.movie.img})
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function(){
		return React.createElement('h2', {}, this.props.movie.title)
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function(){
		return React.createElement('p', {}, this.props.movie.desc)
	}
});

var MovieListing = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function(){
		return (
				React.createElement('li', {key: this.props.movie.id},
					React.createElement(MovieTitle, {movie: this.props.movie}),
					React.createElement(MoviePoster, {movie: this.props.movie}),
					React.createElement(MovieDescription, {movie: this.props.movie})
				)
		)
	}
})

var moviesElements = []
for(var i = 0; i < movies.length; i++) {
		var movieListing = React.createElement(MovieListing, {key: movies[i].id, movie: movies[i]});
		moviesElements.push(movieListing);
}

var MovieList = React.createClass({
	render: function(){
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Lista filmow'),
				React. createElement('ul', {}, moviesElements)
			)
		)
	}
});

var movieListElement = React.createElement(MovieList);
ReactDOM.render(movieListElement, document.getElementById('app'));