import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SignIn extends Component{

    state = {

    };

    componentDidMount() {

    }

    render() {

        return(
            <div>
                <h2>Authorization</h2>
                <input type="text" name="login" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" name="" value="Login" />
                <NavLink to={"/Registration"}>Registration</NavLink>

            </div>
        )
    }

}

export default SignIn;