var CounterAddition = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	 increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},
	 decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('h1', {}, this.state.counter),
			React.createElement('button', {onClick: this.increment}, '+'),
			React.createElement('button', {onClick: this.decrement}, '-'),
			);
		}
});

var CounterSquare = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},
	 multiply: function() {
		this.setState({
			counter: this.state.counter ** 2
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('h1', {}, this.state.counter),
			React.createElement('button', {onClick: this.increment}, '**'),
			);
		}
});

var elementAddition = React.createElement(CounterAddition);
var elementSquare = React.createElement(CounterSquare);

var counters = [];
counters.push(elementAddition, elementSquare)
ReactDOM.render(elementAddition, document.getElementById('app'));

ReactDOM.render(counters, document.getElementById('app'));