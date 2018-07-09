App = React.createClass({
	getInitialState: function() {
		return {
			loading: false,
			searchTerm:'',
			gif:{}
		};
	},
	handleSearch: function(searchTerm){
		this.setState({
			loading: true
		});
		this.getGif(searchTerm)
			.then(response => const data = JSON.parse(response.responseText).data;
				var gif = {
					url: data.fixed_width_downsampled_url,
					sourceUrl: data.url
				};
				this.setState({
				loading: false,
				gif: gif,
				searchTerm: searchTerm
			});
			)
			.catch(error => console.error('Something went wrong', error));
	},
	getGif: function(searchTerm){
		return new Promise(function(resolve, reject) {
				const GIPHY_API_URL = 'http://api.giphy.com';
				const GIPHY_PUB_KEY = 'dc6zaTOxFJmzC';
				const url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchTerm;
				const xhr = new XMLHttpRequest();
				xhr.onload = function() {
					if (this.status === 200) {
						resolve(this.response);
					} else {
						reject(new error(this.statusText));
					}
				};
				request.open('GET', url);
				request.send();
			});
	},	
	render: function(){
		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};
		return (
			<div style={styles}>
				<h1>Wyszukiwarka GIFow!</h1>
				<p>Znajdz GIFa na <a href='http://giphy.com'>giphy</a>.
				 Naciskaj enter, aby pobrac kolejne gify.</p>
				<Search
				onSearch={this.handleSearch}
				/>
				<Gif
					loading={this.state.loading}
					url={this.state.gif.url}
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
			);
	}
});