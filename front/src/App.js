import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

// import Cookies from 'universal-cookie';

import {validateToken} from "./services/API/token";

import Header from './components/Header'
import PhoneList from './components/Products/Phones/PhoneList'
import PhoneFullInfo from "./components/Products/Phones/PhoneFullInfo";
import SignIn from "./components/SignIn";
import Greeting from "./components/Greeting";
import Registration from "./components/Registration";
import Cart from "./components/Cart"

import history from './services/history';

class App extends Component {

    state = {
        email: "none",
    };

    async componentDidMount() {
        // const cookie = new Cookies();
        // cookie.get("email");
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("user-jwt");
        if((email == null) || (token == null)){
            console.log("do auth");
            this.updateEmail("none");
        }
        else {
            const message = await validateToken(token);
            console.log("жопа");
            console.log(message);
            if (message === "valid") {
                this.updateEmail(email);
            } else {
                alert("Token expired, sign in");
                this.updateEmail("none");
                localStorage.removeItem("user-jwt");
                localStorage.removeItem("email");
                history.push('/signIn');

            }
        }
    }

    constructor(props) {
        super(props);
        this.updateEmail = this.updateEmail.bind(this);
    }

    updateEmail(email) {
        this.setState({email: email});
    }

    render() {
        const {email} = this.state;

        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header email={email} updateEmail ={this.updateEmail}/>
                        <Switch>
                            <Route
                                exact path='/'
                                render={(props) => <Greeting email={email} />}
                            />
                            <Route exact path='/Phones/:phoneId' component={PhoneFullInfo}/>
                            <Route exact path='/Phones' component={PhoneList}/>
                            <Route exact path='/Cart' component={Cart}/>
                            <Route
                                exact path='/SignIn'
                                render={(props) => <SignIn updateEmail ={this.updateEmail} />}
                            />
                            <Route exact path='/Registration' component={Registration}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
