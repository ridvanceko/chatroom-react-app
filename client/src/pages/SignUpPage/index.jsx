import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import SignUpComponent  from '../../components/SignUpComponent'

class SignUpPage extends Component {
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
		console.log("submitss",this.state)

		event.preventDefault();
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.userName,
				password: this.state.password,
				name: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email
			})
			.then(response => {
				console.log("jesus")
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
			<div className={"limiter"}>
						<div className={"container-login100"}>
							<div className={"wrap-login100"}>
								<div className={"signup100-pic"} data-tilt>
									<img src={require("./images/DARIO-hamjrs.png")} class={"my-5"} width="300px" alt={"IMG.."} />
								</div>
										<SignUpComponent
											firstName={this.state.firstName}
											lastName={this.state.lastName}
											email={this.state.email}
											userName={this.state.userName}
											password={this.state.password}
											confirmPassword={this.state.confirmPassword}
											handleChange={this.handleChange}
											handleSubmit={this.handleSubmit}
										/>
					</div>
						</div>
					</div>
			
		)
	}
}

export default SignUpPage;