import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import './signIn.scss';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

class SignIn extends Component {

    state = {
      email: '',
      password: ''
    };

    render() {
        return (
            <div className="signIn">
                <MuiThemeProvider>
                    <div>
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
                        <Button variant="contained" color="primary"  onClick={(event) => this.handleClick(event)}>
                            Submit
                        </Button>
                        <br/>
                        <RaisedButton className="reg" primary={true} label="Registration" containerElement={<NavLink to="/registration"/>} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


    handleClick(event){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const myInit = { method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })
        };
        console.log(myInit.body);
        fetch('http://localhost:8090/signin', myInit)
            .then(function(res){ return res.json(); })
            .then(function(data){
                alert( JSON.stringify( data ));
                localStorage.setItem('user-jwt', data.token)
            })
    }
}



export default SignIn;