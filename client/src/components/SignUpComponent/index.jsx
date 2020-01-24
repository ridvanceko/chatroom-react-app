import React from 'react'


class SignUpComponent extends React.Component {

    constructor() {
        super();
        this.state = {

            SfirstName: "wrap-input100 validate-input",
            SlastName: "wrap-input100 validate-input",
            Semail: "wrap-input100 validate-input",
            SuserName: "wrap-input100 validate-input",
            Spassword: "wrap-input100 validate-input",
            SconfirmPassword: "wrap-input100 validate-input"
        };
        // this.googleSignin = this.googleSignin.bind(this)
        this.handleMySubmit = this.handleMySubmit.bind(this);
        this.hideValidate = this.hideValidate.bind(this);
    }

    handleMySubmit(event) {
        event.preventDefault();
        console.log("handel validation", this.handleValidation());

        if (this.handleValidation()) {
            this.props.handleSubmit(event);
        }
        else {
            this.handleValidation()
        }
    }

    validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email)

    }
    handleValidation() {
        let firstName = this.props.firstName;
        let lastName = this.props.lastName;
        let email = this.props.email;
        let userName = this.props.userName;
        let password = this.props.password;
        let confirmPassword = this.props.confirmPassword;


        let firstNameIsValid = false
        let lastNameIsValid = false
        let emailIsValid = false
        let userNameIsValid = false
        let passwordIsValid = false
        let confirmPasswordIsValid = false
        if (firstName.trim() === '' || firstName.length < 3) {
            this.showValidate('firstName');
        } else {
            this.hideValidate('firstName');
            firstNameIsValid = true;
        }
        if (lastName.trim() === '' || lastName.length < 3) {
            this.showValidate('lastName');
        } else {
            this.hideValidate('lastName');
            lastNameIsValid = true;
        }

        if (email.trim() === '' || !this.validateEmail(email)) {
            this.showValidate('email');
        } else {
            this.hideValidate('email');
            emailIsValid = true;

        }
        if (userName.trim() === '' || userName.length < 5) {
            this.showValidate('userName');
        } else {
            this.hideValidate('userName');
            userNameIsValid = true;
        }
        if (password.trim() === '' || password.length < 6) {
            this.showValidate('password');
        } else {
            this.hideValidate('password');
            passwordIsValid = true;
        }
        if (confirmPassword.trim() === '' || confirmPassword.trim() !== password.trim()) {
            this.showValidate('confirmPassword');
        } else {
            this.hideValidate('confirmPassword');
            confirmPasswordIsValid = true;
        }

        return firstNameIsValid && lastNameIsValid && emailIsValid && userNameIsValid && passwordIsValid && confirmPasswordIsValid;
    }

    showValidate(sign) {

        if (sign === "firstName") {
            this.setState({
                SfirstName: "wrap-input100 validate-input alert-validate"
            });
        }
        if (sign === "lastName") {
            this.setState({
                SlastName: "wrap-input100 validate-input alert-validate"
            });
        }
        if (sign === "email") {
            this.setState({
                Semail: "wrap-input100 validate-input alert-validate"
            });
        }
        if (sign === "userName") {
            this.setState({
                SuserName: "wrap-input100 validate-input alert-validate"
            });
        }
        if (sign === "password") {
            this.setState({
                Spassword: "wrap-input100 validate-input alert-validate"
            });
        }
        if (sign === "confirmPassword") {
            this.setState({
                SconfirmPassword: "wrap-input100 validate-input alert-validate"
            });
        }

    }


    hideValidate(sign) {
        if (sign === "firstName") {
            this.setState({
                SfirstName: "wrap-input100 validate-input "
            });
        }
        if (sign === "lastName") {
            this.setState({
                SlastName: "wrap-input100 validate-input "
            });
        }
        if (sign === "email") {
            this.setState({
                Semail: "wrap-input100 validate-input "
            });
        }
        if (sign === "userName") {
            this.setState({
                SuserName: "wrap-input100 validate-input "
            });
        }
        if (sign === "password") {
            this.setState({
                Spassword: "wrap-input100 validate-input "
            });
        }
        if (sign === "confirmPassword") {
            this.setState({
                SconfirmPassword: "wrap-input100 validate-input "
            });
        }

    }

    render() {
        return (
            <form className={"login100-form validate-form"}>
                {/* <div className="SignupForm">

                    <div className="wrap-signup100"> */}

                <div className={this.state.SfirstName}
                    data-validate="valid name is required">
                    <label htmlFor="name">Name: </label>
                    <input className="input100"
                        autoComplete="false"
                        type="text"
                        name="firstName"
                        value={this.props.firstName}
                        onChange={this.props.handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                <div className={this.state.SlastName}
                    data-validate="valid lastname is required ">
                    <label htmlFor="lastname">Lastname: </label>
                    <input className="input100"
                        autoComplete="false"
                        type="text"
                        name="lastName"
                        value={this.props.lastName}
                        onChange={this.props.handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                <div className={this.state.Semail}
                    data-validate="valid email is required">
                    <label htmlFor="email">E-mail address: </label>
                    <input className="input100"
                        autoComplete="false"
                        type="email"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                <div className={this.state.SuserName}
                    data-validate="username is required (more than 6 letters)">
                    <label htmlFor="username">Username: </label>
                    <input className="input100"
                        autoComplete="false"
                        type="text"
                        name="userName"
                        value={this.props.userName}
                        onChange={this.props.handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                <div className={this.state.Spassword}
                    data-validate="password is required (more than 6 letters)">
                    <label htmlFor="password">Password: </label>
                    <input className="input100"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        autoComplete="false"
                        type="password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                <div className={this.state.SconfirmPassword}
                    data-validate="passwords does not match">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input className="input100"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        autoComplete="false"
                        type="password"
                        name="confirmPassword"
                        value={this.props.confirmPassword}
                        onChange={this.props.handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                <button className="signup-button" onClick={this.handleMySubmit}>SIGN UP</button>
              
            </form>
        )
    }
}

export default SignUpComponent;