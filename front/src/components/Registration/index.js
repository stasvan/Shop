import React, {Component} from 'react';

class Registration extends Component{

    state = {

    };

    componentDidMount() {

    }

    render() {

        return(
            <div>
                <h2>Registration</h2>
                <input className="firstName" type="text" name="firstName" placeholder="First name" />
                <input className="lastName" type="text" name="lastName" placeholder="Last name" />
                <input type="text" name="login" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" name="" value="Register" />
            </div>
        )
    }

}

export default Registration;