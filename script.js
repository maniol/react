var CounterAddition = React.createClass({
	getDefaultProps: function() {
		console.log('initialization phase: getting default props');
	},
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
	shouldComponentUpdate: function (nextProps, nextState) {
		console.log('update phase: should component update');
		return nextState.count == this.state.count;
	},
	render: function() {
		return React.createElement('div', {},
			React.createElement('h1', {}, this.state.counter),
			React.createElement('button', {onClick: this.increment}, '+'),
			React.createElement('button', {onClick: this.decrement}, '-'),
			);
		},
	componentDidMount: function() {
		console.log('initialization: after mounting');
	},
	componentDidUpdate() {
		console.log('update phase: component did update');
	},
	componentWillUnmount: function() {
		console.log('delete phase: component will unmount')
	}
});

var CounterSquare = React.createClass({
	getInitialState: function() {
		return {
			counter: 2
		};
	},
	 power: function() {
		this.setState({
			counter: Math.pow(this.state.counter, 2)
		});
	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('h1', {}, this.state.counter),
			React.createElement('button', {onClick: this.power}, '**'),
			);
		}
});

var elementAddition = React.createElement(CounterAddition);
var elementSquare = React.createElement(CounterSquare);


var CounterList = React.createClass({
	render: function(){
		return (
			React.createElement('div', {},
				React.createElement('h1', {}, 'Counters'),
				React. createElement('div', {},
					React.createElement(CounterAddition, {id: 1}),
					React.createElement(CounterSquare, {id: 2})
				)
			)
		)
	}
});

var counterList = React.createElement(CounterList)
ReactDOM.render(counterList, document.getElementById('app'));
