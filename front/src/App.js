import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

import {validateToken} from "./services/API/token";

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
import Shop from "./components/Shop"

import history from './services/history';
import {parseJwt} from "./utils/utils";
import {showTextToast} from "./utils/utils";

toast.configure()

class App extends Component {

    state = {
        role: "",
        isLoading: true
    };


    componentDidMount() {
        //const updateEmail = this.updateEmail;
        const updateLoading = this.updateLoading;
        const updateRole = this.updateRole;
        //const email = localStorage.getItem("email");
        const token = localStorage.getItem("user-jwt");
        if(token == null){
            console.log("do auth");
            //updateEmail("none");
            updateLoading(false);
        }
        else {
            validateToken(token).then(function (message) {
                console.log(message);
                if (message === "valid") {
                    const data = parseJwt(token);
                    updateRole(data.role);
                } else {
                    showTextToast("Bad token, sign in");
                    localStorage.removeItem("user-jwt");
                    history.push('/sign-in');

                }
                updateLoading(false);
            });
        }
    }

    constructor(props) {
        super(props);
        //this.updateEmail = this.updateEmail.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
        this.updateRole = this.updateRole.bind(this);
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    updateRole(state) {
        this.setState({role: state});
        console.log("UPDATE ROLE");
    }

    render() {
        const {isLoading} = this.state;
        const {role} = this.state;
        if (isLoading){
            return '';
        }
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header updateRole = {this.updateRole} role = {role} />
                        <Switch>
                            <Route
                                exact path='/'
                                render={(props) => <Greeting />}
                            />
                            <Route
                                exact path='/phones/:brandName/:model'
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
                                render={(props) => <Cart updateRole = {this.updateRole}/>}
                            />
                            <Route
                                exact path='/profile'
                                render={(props) => <Profile updateRole = {this.updateRole}/>}
                            />
                            <Route
                                exact path='/sign-in'
                                render={(props) => <SignIn updateRole = {this.updateRole}/>}
                            />
                            <Route
                                exact path='/registration'
                                render={(props) => <Registration />}
                            />
                            <Route
                                exact path='/shop'
                                render={(props) => <Shop />}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
