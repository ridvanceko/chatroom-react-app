import React from 'react'

class LoginForm extends React.Component{

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

    handleMySubmit(event){
        event.preventDefault();
       console.log(this.handleValidation());
        if(this.handleValidation()){
            this.props.handleSubmit(event);
        }
    }


    handleValidation(){
        let username = this.props.username;
        let password = this.props.password;

        if(username.trim() === ''){
            this.showValidate('name');
        }else {
            this.hideValidate('name');
        }
        if(password.trim() === ''){
            this.showValidate('password');
        }else {
            this.hideValidate('password');
        }

        return username.trim() !== '' && password.trim() !== '';
    }

    showValidate(sign) {

        if (sign === "password"){
            return this.setState({
                signPassword: "wrap-input100 validate-input alert-validate"
            });
        }else {
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

    render(){
        return(
                        <form className={"login100-form validate-form"}>

                       
                            <span className="login100-form-title">
                              DARIO
                            {/* <img src={'./images/dario-dario.png'}/> */}
                            </span>

                            <div className={this.state.signName}
                                 data-validate="name is required">

                                <input className={"input100"}
                                       type={"text"}
                                       name={"username"}
                                       value={this.props.username}
                                       onChange={this.props.handleChange}
                                       onClick={this.hideValidate}
                                       placeholder={"name"}/>

                                <span className="focus-input100"></span>
                                <span className="symbol-input100"><i className="fa fa-user" aria-hidden="true"></i></span>
                            </div>

                            <div className={this.state.signPassword} data-validate="Password is required">
                                <input className={"input100"}
                                       type={"password"}
                                       name={"password"}
                                       value={this.props.password}
                                       onChange={this.props.handleChange}
                                       placeholder="Password"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100"><i className="fa fa-lock" aria-hidden="true"></i></span>

                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn"
                                        onClick={this.handleMySubmit}>
                                    Login
                                </button>
                </div>

<<<<<<< HEAD
                            <div className="text-center p-t-136">
                                <a className="txt2" href="#">
                                    Create your Account
=======
                <div className="text-center p-t-12">
                    <span className="txt1">
                        Forgot
                                </span>
                    <a className="txt2" href="/">
                        Username / Password?
                                </a>
                </div>

                <div className="text-center p-t-136">
                    <a className="txt2" href="/">
                        Create your Account
>>>>>>> 2fb304eba19943c2bff5efbf0546ed5012394c3d
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </a>
                </div>
            </form>
        )
    }
}

export default LoginForm;