import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import {validateToken} from "./services/API/token";

import Header from './components/Header'
import PhoneList from './components/Products/Phones/PhoneList'
import PhoneFullInfo from "./components/Products/Phones/PhoneFullInfo";
import LaptopList from './components/Products/Laptops/LaptopList'
import LaptopFullInfo from "./components/Products/Laptops/LaptopFullInfo";
import SignIn from "./components/SignIn";
import Greeting from "./components/Greeting";
import Registration from "./components/Registration";
import Cart from "./components/Cart"
import Profile from "./components/Profile"

import history from './services/history';

class App extends Component {

    state = {
        email: "none",
        isLoading: true
    };

    componentDidMount() {
        const updateEmail = this.updateEmail;
        const updateLoading = this.updateLoading;
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("user-jwt");
        if((email == null) || (token == null)){
            console.log("do auth");
            updateEmail("none");
            updateLoading(false);
        }
        else {
            validateToken(token).then(function (message) {
                console.log(message);
                if (message === "valid") {
                    updateEmail(email);
                } else {
                    alert("Bad token, sign in");
                    updateEmail("none");
                    localStorage.removeItem("user-jwt");
                    localStorage.removeItem("email");
                    history.push('/signIn');

                }
                updateLoading(false);
            });
        }

    }

    constructor(props) {
        super(props);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
    }

    updateEmail(email) {
        this.setState({email: email});
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    render() {
        const {email, isLoading} = this.state;
        if (isLoading){
            return '';
        }
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
                            <Route
                                exact path='/phones/:phoneId'
                                component={PhoneFullInfo}
                            />
                            <Route
                                exact path='/phones'
                                component={PhoneList}
                            />
                            <Route
                                exact path='/laptops/:laptopId'
                                component={LaptopFullInfo}
                            />
                            <Route
                                exact path='/laptops'
                                component={LaptopList}
                            />
                            <Route
                                exact path='/cart'
                                render={(props) => <Cart email={email} updateEmail ={this.updateEmail}/>}
                            />
                            <Route
                                exact path='/profile'
                                render={(props) => <Profile email={email} />}
                            />
                            <Route
                                exact path='/signIn'
                                render={(props) => <SignIn updateEmail ={this.updateEmail} email={email}/>}
                            />
                            <Route
                                exact path='/registration'
                                render={(props) => <Registration email={email} />}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
