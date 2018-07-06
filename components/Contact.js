var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			<div className={'contactItem'}>
				<img className={'contactImage'} src={'images\\icon.png'}/>
				<div className={'contactInfo'}>
					<p className={'contactLabel'}>{this.props.item.firstName}</p>
					<p className={'contactLabel'}>{this.props.item.lastName}</p>
					<a className={'contactEmail'} href={this.props.item.email}>{this.props.item.email}</a>
				</div>
			</div>
		)
	},
});