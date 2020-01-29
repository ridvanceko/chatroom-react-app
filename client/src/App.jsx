import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
// import Home from './pages/Home'
import ChatRoom from "./pages/ChatRoom";
// import { NavBar } from './components'



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			user: null
		};
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
		this._getAllUsers = this._getAllUsers.bind(this);

	};

	componentDidMount() {
		
	};
	_getAllUsers() {
		axios.get('/users/').then(response => {
			if (response) {
				this.setState({ friendList: response })
			}

		})
	}

	_logout(event) {
		event.preventDefault();
		console.log("function is working dudeeeeeeeeee")
		axios.post('/auth/logout', {}).then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		// console.log("run _login: " + username + " " + password);
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				if (response.status === 200) {
					this.setState({
						loggedIn: true,
						user: response.data.user
					});
			
					
				}
			})
	}

	render() {
		return (
			<div className="">
				{/*/!* Navbar on every page *!/*/}
				{/* /*<NavBar _logout={this._logout} loggedIn={this.state.loggedIn} /> */}
				{/*  Individual Things */}
				<Route exact path="/" render={
					() => <LoginPage _login={this._login} _googleSignin={this._googleSignin} loggedIn={this.state.loggedIn} />
				} />
				<Route exact path="/login" render={
					() => <LoginPage _login={this._login} _googleSignin={this._googleSignin} loggedIn={this.state.loggedIn} />
				} />
				<Route exact path="/signup" render={
					() => <SignUpPage _login={this._login} _googleSignin={this._googleSignin} loggedIn={this.state.loggedIn} />
				} />
				<Route exact path="/chatroom" render={
					() => <ChatRoom _logout={this._logout} _getAllUsers={this._getAllUsers} user={this.state.user} loggedIn={this.state.loggedIn} />
				} />
				
			</div>
		)
	}
}

export default App
