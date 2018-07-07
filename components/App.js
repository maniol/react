var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jan.nowak@example.com',
	},
	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Kowalski',
		email: 'adam.kowalski@example.com',
	},
	{
		id: 3,
		firstName: 'Zbigniew',
		lastName: 'Koziol',
		email: 'zbigniew.koziol@example.com',
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			<div className={app}>
				<form className={contactForm}>
					<input type={'text'} placeholder={'Name'} value={this.props.contact.firstName}></input>
					<input type={'text'} placeholder={'Last Name'} value={this.props.contact.lastName}></input>
					<input type={'email'} placeholder={'Email'} value={this.props.contact.email}></input>
					<button type={'submit'}>Add contact</button>
				</form>
				/* tu musze dodac funkcje z petla ktora generuje html dla kazdego kontaktu - o to chodzi?*/
				React.createElement(Contacts, {items: contacts}, {})
			)
		);
	}
});