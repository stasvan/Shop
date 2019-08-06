import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'typeface-roboto';

import {validateToken} from "./services/API/token";

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import PhoneList from './pages/PhoneList'
import PhoneFullInfo from "./pages/PhoneFullInfo";
import LaptopList from './pages/LaptopList'
import LaptopFullInfo from "./pages/LaptopFullInfo";
import TvList from './pages/TvList'
import TvFullInfo from "./pages/TvFullInfo";
import SignIn from "./pages/SignIn";
import Greeting from "./pages/Greeting";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Shop from "./pages/Shop"

import history from './services/history';
import {parseJwt} from "./utils/utils";
import {showTextToast} from "./utils/utils";

toast.configure();

class App extends Component {

    state = {
        role: "",
        isLoading: true
    };


    componentDidMount() {
        const updateLoading = this.updateLoading;
        const updateRole = this.updateRole;
        const token = localStorage.getItem("user-jwt");
        if(token == null){
            updateLoading(false);
        }
        else {
            validateToken(token).then(function (message) {
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
        this.updateLoading = this.updateLoading.bind(this);
        this.updateRole = this.updateRole.bind(this);
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    updateRole(state) {
        this.setState({role: state});
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
                            <Route exact path='/phones/:brandName/:model' render={(props) => <PhoneFullInfo updateRole = {this.updateRole} {...props} />} />
                            <Route
                                exact path='/phones'
                                component={PhoneList}
                            />
                            <Route exact path='/laptops/:brandName/:model' render={(props) => <LaptopFullInfo updateRole = {this.updateRole} {...props} />} />
                            <Route
                                exact path='/laptops'
                                component={LaptopList}
                            />
                            <Route exact path='/tvs/:brandName/:model' render={(props) => <TvFullInfo updateRole = {this.updateRole} {...props} />} />
                            <Route
                                exact path='/tvs'
                                component={TvList}
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
                                exact path='/my-shop'
                                render={(props) => <Shop updateRole = {this.updateRole} role = {role} />}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
