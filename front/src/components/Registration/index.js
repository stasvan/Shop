import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';

import './registration.scss'


class Registration extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: ''
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
                        <TextField
                            hintText="Enter your role"
                            floatingLabelText="Role"
                            onChange={(event, newValue) => this.setState({role: newValue})}
                        />
                        <br/>
                        <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event)}>
                            Primary
                        </Button>

                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

    handleClick(event){

        const {email, password, role} = this.state;

        if ((email !== '') || (role !== '') || (password !== '') ){
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const myInit = { method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    role: this.state.role

                })
            };
            console.log(myInit.body);
            fetch('http://localhost:8090/registration', myInit)
                .then(function(res){ return res.json(); })
                .then(function(data){
                    alert( JSON.stringify( data.message ));
                })
        }
    }
}

export default Registration;