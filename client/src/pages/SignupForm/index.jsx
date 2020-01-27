import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './signup.css';

export default class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			userName: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	

	handleSubmit(event) {
		console.log("submit");
		event.preventDefault();
		// TODO - validate!
		axios
			.post('/auth/signup', {
				userName: this.state.userName,
				password: this.state.password,
				firstName :this.state.name,
				lastName :this.state.lastName,
				email :this.state.email
			})
			.then(response => {
				console.log(response);
				if (!response.data.errmsg) {
					console.log('youre good');
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			
			<div className="SignupForm">
				
				<div className="wrap-signup100">
				<label  htmlFor="name">Name: </label>
				<input className="signup-box-100"
					autoComplete="false"
					type="text"
					name="firstName"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<label htmlFor="username">Lastname: </label>
				<input className="signup-box-100"
					autoComplete="false"
					type="text"
					name="lastName"
					value={this.state.lastName}
					onChange={this.handleChange}
				/>
				<label  htmlFor="email">E-mail address: </label>
				<input className="signup-box-100"
					autoComplete="false"
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<label htmlFor="username">Username: </label>
				<input className="signup-box-100"
					autoComplete="false"
					type="text"
					name="userName"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input className="signup-box-100"
					autoComplete="false"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label  htmlFor="confirmPassword">Confirm Password: </label>
				<input className="signup-box-100"
					autoComplete="false"
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button className="signup-button" onClick={this.handleSubmit}>SIGN UP</button>
				</div>
			</div>
		)
	}
}
