import React from 'react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            signName: "wrap-input100 validate-input",
            signPassword: "wrap-input100 validate-input"
        };
        // this.googleSignin = this.googleSignin.bind(this)
        this.handleMySubmit = this.handleMySubmit.bind(this);
        this.hideValidate = this.hideValidate.bind(this);
    }

    handleMySubmit(event) {
        event.preventDefault();
        console.log(this.handleValidation());
        if (this.handleValidation()) {
            this.props.handleSubmit(event);
        }
    }


    handleValidation() {
        let username = this.props.username;
        let password = this.props.password;

        if (username.trim() === '') {
            this.showValidate('name');
        } else {
            this.hideValidate('name');
        }
        if (password.trim() === '') {
            this.showValidate('password');
        } else {
            this.hideValidate('password');
        }

        return username.trim() !== '' && password.trim() !== '';
    }

    showValidate(sign) {

        if (sign === "password") {
            return this.setState({
                signPassword: "wrap-input100 validate-input alert-validate"
            });
        } else { 
            return this.setState({
                signName: "wrap-input100 validate-input alert-validate"
            });
        }

    }
    hideValidate() {
        return this.setState({
            signPassword: "wrap-input100 validate-input",
            signName: "wrap-input100 validate-input"
        });
    }

    render() {
        return (
            <form className={"login100-form validate-form"}>


                {/* <span className="login100-form-title">
                              DARIO
                           
                            </span> */}

                <div className={this.state.signName}
                    data-validate="name is required">

                    <input className={"logininput100"}
                        type={"text"}
                        name={"username"}
                        value={this.props.username}
                        onChange={this.props.handleChange}
                        onClick={this.hideValidate}
                        placeholder={"name"} />

                    <span className="focus-logininput100"></span>
                    <span className="symbol-logininput100"><i className="fa fa-user" aria-hidden="true"></i></span>
                </div>

                <div className={this.state.signPassword} data-validate="Password is required">
                    <input className={"logininput100"}
                        type={"password"}
                        name={"password"}
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        placeholder="Password" />
                    <span className="focus-logininput100"></span>
                    <span className="symbol-logininput100"><i className="fa fa-lock" aria-hidden="true"></i></span>

                </div>

                <div className="container-login100-form-btn">
                    <button className="login100-form-btn"
                        onClick={this.handleMySubmit}>
                        Login
                                </button>
                </div>
               
                <div className="text-center p-t-136">
                <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                        Create your Account
						</Link>
                    </li>
                </div>
            </form>
        )
    }
}

export default LoginForm;