import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';

import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Baez',
      currentTitle: '',
      currentDetails: '',
      notes: []
    }
	}

	componentWillMount(){
		const config = {
			apiKey: "AIzaSyDoln4vyoS-ZLnL50XHz92VdayNpK-GWes",
			authDomain: "test-app-ca288.firebaseapp.com",
			databaseURL: "https://test-app-ca288.firebaseio.com",
			projectId: "test-app-ca288",
			storageBucket: "",
			messagingSenderId: "115453992592"
		};
		firebase.initializeApp(config);
		console.log('The application is working and calling Firebase');

		firebase.database().ref('/notes')
		  .on('value', snapshot => {
				const fbstore = snapshot.val();
				const store = _.map(fbstore, (value, id) => {
				  return {
						id: id,
						title: value.title,
						details: value.details
					};
				});
				this.setState({
					notes: store
				});
			});
	}
	
	handleChange(event){
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		const data = {
			title: this.state.currentTitle,
			details: this.state.currentDetails
		};

		firebase.database().ref('/notes').push(data, response => response);

		this.setState({
			currentTitle: '',
			currentDetails: ''
		});
	}

	deleteNote(id){
		firebase.database().ref(`/notes/${id}`)
			.remove()
			alert('Remove successfully removed!')
	}

  render() {
    return (
			<div className="">
				<div className="App">
					<Header />
					<div className="container">
						<Form
							currentTitle={this.state.currentTitle}
							currentDetails={this.state.currentDetails}
							handleChange={this.handleChange.bind(this)}
							handleSubmit={this.handleSubmit.bind(this)}
						/>
					</div>
					<div className="row">
						<div className="col s3">
							<p>This is a nice sidebar</p>
						</div>

						<div className="col s9">
							<Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default App;
