Search = React.createClass({
	getInitialState: function() {
		return {
			searchTerm:''
		};
	},
	handleChange: function(event) {
		var searchTerm = event.target.value;
		this.setState({
			searchTerm: searchTerm
		});
		if (searchTerm.length > 2) {
			this.props.onSearch(searchTerm);
		}
	},
	handleKeyUp: function(event) {
		if(event.keyCode === 13) {
			this.props.onSearch(this.state.searchTerm);
		}
	},
	render: function(){
		var syles = {
			fontSize: '1.5em',
			width: '90%',
			maxWidth: '350px'
		};
	return (
		<input type="text" 
		onChange={this.handleChange} 
		onKeyUp={this.handleKeyUp}
		placeholder="Tutaj wpisz wyszukiwana fraze" 
		style={styles} 
		value={this.state.searchTerm}/>
		)
	}
});
