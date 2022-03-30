	const Form = ({form}) => {
	  return (
		<div>
		  
		  {form.map((form) => (
			<div className="card mt-2" key={form.id}>
			  <div className="card-body">
				<h4 className="card-title">{form.name}</h4>
				<h6 className="card-subtitle mb-2 text-muted">{form.email}</h6>
			  </div>
			</div>
		  ))}
		</div>
	  )
	};

	class App extends React.Component {

		// Create array of contacts in state
		state = {
			form: []
		}

		// Once component is loaded, get data from server
		componentDidMount() {
			fetch('http://mi-linux.wlv.ac.uk/~2057147/form/public/form')
			.then(res => res.json())
			.then((data) => {
			  this.setState({ form: data.form }) // Store data to state array
			})
			.catch(console.log)
		}

		render() {
			return (
				<Form form={this.state.form} />
			);
		}
	}



		ReactDOM.render(
		  <App />,
		  document.getElementById('root')
		);