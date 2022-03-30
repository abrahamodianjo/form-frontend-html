const Contacts = ({ contacts }) => {
  return (
	<div>
	  <center><h1>Contact List</h1></center>
	  {contacts.map((contact) => (
		<div className="card mt-2" key={contact.id}>
		  <div className="card-body">
			<h4 className="card-title">{contact.name}</h4>
			<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
			<p className="card-text">{contact.catchPhrase}</p>
		  </div>
		</div>
	  ))}
	</div>
  )
};

class App extends React.Component {

	// Create array of contacts in state
	state = {
		contacts: []
	}

	// Once component is loaded, get data from server
	componentDidMount() {
		fetch('https://mi-linux.wlv.ac.uk/~in9352/codeigniter3/index.php/api/contacts')
		.then(res => res.json())
		.then((data) => {
		  this.setState({ contacts: data }) // Store data to state array
		})
		.catch(console.log)
	}

	render() {
		return (
			<Contacts contacts={this.state.contacts} />
		);
	}
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);