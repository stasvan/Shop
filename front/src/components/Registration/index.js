import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {doRegistration} from "../../services/API/registration";

import './registration.scss'


class Registration extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        checkedAdmin: false
    };

    handleRegistrationClick(event){
        let role;
        const {email, password, checkedAdmin} = this.state;
        if ((email !== '') || (password !== '') ){
            if (checkedAdmin === true){
                role = "admin";
            } else {
                role = "user"
            }
            doRegistration(role, email, password);
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <div className="registration">
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange={(event, newValue) => this.setState({first_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={(event, newValue) => this.setState({last_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange={(event, newValue) => this.setState({email: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.checkedAdmin}
                                    onChange={this.handleChange('checkedAdmin')}
                                    value="checkedAdmin"
                                />
                            }
                            label="Admin"
                        />
                        <br/>
                        <Button variant="contained" color="primary" onClick={(event) => this.handleRegistrationClick(event)}>
                            Sign Up
                        </Button>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default Registration;