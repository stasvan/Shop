import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {doRegistration} from "../../services/API/registration";

import './registration.scss'
import history from "../../services/history";


class Registration extends Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
        checkedAdmin: false
    };

    componentDidMount() {
        const {email} = this.props;
        console.log(email);
        if (email !== "none"){
            return history.push('/');
        }
    }

    handleRegistrationClick(event){
        let role;
        const {email, password, checkedAdmin, name, surname, phone,
            country, city, street, house, apartment} = this.state;
        if ((email !== '') && (password !== '') && (name !== '') &&
            (surname !== '') && (phone !== '') && (country !== '') &&
            (city !== '') && (street !== '') && (house !== '') &&
            (apartment !== '')
        ){
            if (checkedAdmin === true){
                role = "admin";
            } else {
                role = "user"
            }
            doRegistration(role, email, password, name, surname,
                phone, country, city, street, house, apartment)
                .then(data => {
                    //alert(typeof data);
                    alert(data);
                    if (data === "\"Registration completed successfully\""){
                        history.push('/signIn');
                    } else {
                    }
                });

        } else {
            alert("Fill in all the fields");
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <section className="registration">
                        <div>
                            <TextField
                                hintText="Enter your Name"
                                floatingLabelText="Name"
                                onChange={(event, newValue) => this.setState({name: newValue})}
                            />
                            <br/>
                            <TextField
                                hintText="Enter your Surname"
                                floatingLabelText="Surname"
                                onChange={(event, newValue) => this.setState({surname: newValue})}
                            />
                            <br/>
                            <TextField
                                hintText="Enter your Phone number"
                                floatingLabelText="Phone number"
                                onChange={(event, newValue) => this.setState({phone: newValue})}
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
                        </div>
                    </section>
                    <section className="address">
                        <TextField
                            hintText="Enter your Country"
                            floatingLabelText="Country"
                            onChange={(event, newValue) => this.setState({country: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your City"
                            floatingLabelText="City"
                            onChange={(event, newValue) => this.setState({city: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Street"
                            floatingLabelText="Street"
                            onChange={(event, newValue) => this.setState({street: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your House"
                            floatingLabelText="House"
                            onChange={(event, newValue) => this.setState({house: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Apartment"
                            floatingLabelText="Apartment"
                            onChange={(event, newValue) => this.setState({apartment: newValue})}
                        />
                    </section>
                    <section className="signIn">
                        <Button variant="contained" color="secondary" onClick={(event) => this.handleRegistrationClick(event)}>
                            Sign Up
                        </Button>
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }

}

export default Registration;