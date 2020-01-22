import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import './signup.css';

export default class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			lastName: '',
			email: '',
			username: '',
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
				username: this.state.username,
				password: this.state.password,
				name :this.state.name,
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
				<h1>Signup form</h1>
				<label htmlFor="name">Name: </label>
				<input
					autoComplete="false"
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleChange}
				/>
				<label htmlFor="username">Lastname: </label>
				<input
					autoComplete="false"
					type="text"
					name="lastName"
					value={this.state.lastName}
					onChange={this.handleChange}
				/>
				<label htmlFor="email">E-mail address: </label>
				<input
					autoComplete="false"
					type="email"
					name="email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<label htmlFor="username">Username: </label>
				<input
					autoComplete="false"
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<label htmlFor="password">Password: </label>
				<input
					autoComplete="false"
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					autoComplete="false"
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}
