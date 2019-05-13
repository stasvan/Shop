import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './signIn.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

import {doSignIn} from "../../services/API/signIn";

import history from '../../services/history';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
    };

    componentDidMount() {
        const {email} = this.props;
        console.log(email);
        if (email !== "none"){
            return history.push('/');
        }
    }

    constructor(props) {
        super(props);
        this.handleLogInClick = this.handleLogInClick.bind(this);
    }

    handleLogInClick(event){
        const {email, password} = this.state;
        const {updateEmail} = this.props;
        if ((email === "") || (password === "")){
            alert("Fill in the fields")
        } else {
            doSignIn(email, password)
                .then(function (data) {
                        if (typeof data.email == "undefined")
                            alert("Bad inputs");
                        else {
                            localStorage.setItem('user-jwt', data.token);
                            localStorage.setItem('email', data.email);
                            updateEmail(data.email);
                            history.push("/");
                        }
                    }
                );
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="signIn">
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <Button variant="contained" color="secondary"  onClick={(event) => this.handleLogInClick(event)}>
                            Submit
                        </Button>
                        <NavLink className="registration" variant="contained" to={"/registration"} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" >
                                Registration
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

}



export default SignIn;