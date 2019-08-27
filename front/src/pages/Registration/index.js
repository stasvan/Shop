import React, { Component } from 'react';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';

import FormControlLabel from '@material-ui/core/FormControlLabel/index';
import Checkbox from '@material-ui/core/Checkbox/index';
import {Card} from "@material-ui/core";


import {doRegistration} from "../../services/API/registration";

import './registration.scss'
import history from "../../services/history";
import {showTextErrorToast} from "../../utils/utils";
import MuiPhoneNumber from 'material-ui-phone-number';

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
        const token = localStorage.getItem("user-jwt");
        if (token != null){
            return history.push('/');
        }
    }

    handleSignUpClick(event){
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
                    showTextErrorToast(data);
                    if (data === 'Registration completed successfully'){
                        history.push('/sign-in');
                    } else {
                    }
                });

        } else {
            showTextErrorToast("Fill in all the fields");
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handlePhoneChange = value  => {
        this.setState({
            phone: value
        });
    }

    handleCheckAdminChange = name => event => {
        this.setState({
            [name]: event.target.checked,
        });
    };

    render() {
        const style = {width: 250};
        const backgroundColor = "#F6F6F6";
        return (
            <Card className="registration" style={{backgroundColor}}>
                <section className="registration__info">
                    <div>
                        <TextField
                            id="standard-name"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            style={style}
                        />
                        <TextField
                            id="standard-surname"
                            label="Surname"
                            value={this.state.surname}
                            onChange={this.handleChange('surname')}
                            margin="normal"
                            style={style}
                        />
                        <TextField
                            id="standard-email-input"
                            label="Email"
                            type="email"
                            margin="normal"
                            onChange={this.handleChange('email')}
                            style={style}
                            // onChange={(event, newValue) => this.setState({email: newValue})}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            onChange={this.handleChange('password')}
                            type="password"
                            // autoComplete="current-password"
                            margin="normal"
                            style={style}
                        />
                        {/*<TextField*/}
                        {/*    id="standard-phone-input"*/}
                        {/*    label="Phone"*/}
                        {/*    onChange={this.handleChange('phone')}*/}
                        {/*    type="phone"*/}
                        {/*    margin="normal"*/}
                        {/*    style={style}*/}
                        {/*/>*/}
                        <MuiPhoneNumber onlyCountries = {['by','ru','ua']} defaultCountry={'by'} onChange={this.handlePhoneChange}/>
                        {/*<InputLabel className="inputPhoneLabel" htmlFor="formatted-phone-mask-input">phone</InputLabel>*/}
                        {/*<Input*/}
                        {/*    value={phone}*/}
                        {/*    // onChange={this.handleChange('phone')}*/}
                        {/*    id="standard-phone-input"*/}
                        {/*    onChange={e => this.setState({phone: /[A-Z][a-z]+\s[A-Z][a-z]+/.exec(e.target.innerHTML)})}*/}
                        {/*/>*/}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.checkedAdmin}
                                    onChange={this.handleCheckAdminChange('checkedAdmin')}
                                    color="primary"
                                    value="checkedAdmin"
                                />
                            }
                            label="Shop Admin"
                        />
                    </div>
                </section>
                <section className="registration__address">
                    <TextField
                        id="standard-country"
                        label="Country"
                        value={this.state.country}
                        onChange={this.handleChange('country')}
                        margin="normal"
                        style={style}
                    />
                    <TextField
                        id="standard-city"
                        label="City"
                        value={this.state.city}
                        onChange={this.handleChange('city')}
                        margin="normal"
                        style={style}
                    />
                    <TextField
                        id="standard-street"
                        label="Street"
                        value={this.state.street}
                        onChange={this.handleChange('street')}
                        margin="normal"
                        style={style}
                    />
                    <TextField
                        id="standard-house"
                        label="House"
                        value={this.state.house}
                        onChange={this.handleChange('house')}
                        margin="normal"
                        style={style}
                    />
                    <TextField
                        id="standard-apartment"
                        label="Apartment"
                        value={this.state.apartment}
                        onChange={this.handleChange('apartment')}
                        margin="normal"
                        style={style}
                    />
                </section>
                <section className="registration__signUpButton">
                    <Button variant="contained" color="primary" onClick={(event) => this.handleSignUpClick(event)}>
                        Sign Up
                    </Button>
                </section>
            </Card>
        );
    }

}

export default Registration;