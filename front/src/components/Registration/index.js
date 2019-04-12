import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            if (checkedAdmin === true){
                role = "admin";
            } else {
                role = "user"
            }
            const myInit = { method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    role: role
                })
            };

            fetch('http://localhost:8090/registration', myInit)
                .then(function(res){ return res.json(); })
                .then(function(data){
                    alert( JSON.stringify( data.message ));
                });

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