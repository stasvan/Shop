import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './signIn.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Card} from "@material-ui/core";


import {doSignIn} from "../../services/API/signIn";

import {showTextErrorToast} from "../../utils/utils";

import {parseJwt} from "../../utils/utils";

import history from '../../services/history';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
    };

    componentDidMount() {
        const token = localStorage.getItem("user-jwt");
        if (token != null){
            return history.push('/');
        }
    }

    constructor(props) {
        super(props);
        this.handleLogInClick = this.handleLogInClick.bind(this);
    }

    handleLogInClick(event){
        const {email, password} = this.state;
        const {updateRole} = this.props;
        if ((email === "") || (password === "")){
            showTextErrorToast("Fill in the fields");
        } else {
            doSignIn(email, password)
                .then(function (data) {
                        if (typeof data.token == "undefined")
                            showTextErrorToast("Bad login or password!");
                        else {
                            localStorage.setItem('user-jwt', data.token);
                            const tokenData = parseJwt(data.token);
                            updateRole(tokenData.role);
                            history.push("/");
                        }
                    }
                )
                .catch((err) => {
                    showTextErrorToast("Error")
                })
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const backgroundColor = "#F6F6F6";
        return (
            <div>
                <Card className="signInCard" style={{backgroundColor}}>
                    <div className="signInCard__emailField">
                        <TextField
                            id="standard-email-input"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            onChange={this.handleChange('email')}
                            style={{ width: 250}}
                        />
                    </div>
                    <div className="signInCard__passwordField">
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange('password')}
                            style={{ width: 250}}
                        />
                    </div>
                    <div className="signInCard__submitButton">
                        <Button variant="contained" color="primary"  onClick={(event) => this.handleLogInClick(event)}>
                            Submit
                        </Button>
                    </div>
                    <div className="signInCard__regButton">
                        <NavLink variant="contained" to={"/registration"} style={{ textDecoration: 'none' }}>
                            <Button variant="contained">
                                Registration
                            </Button>
                        </NavLink>
                    </div>
                </Card>
            </div>
        );
    }

}



export default SignIn;