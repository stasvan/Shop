import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
// import Cookies from 'universal-cookie';

import Header from './components/Header'
import PhoneList from './components/Products/Phones/PhoneList'
import PhoneFullInfo from "./components/Products/Phones/PhoneFullInfo";
import SignIn from "./components/SignIn";
import Greeting from "./components/Greeting";
import Registration from "./components/Registration";

class App extends Component {

    state = {
        email: "none"
    };

    componentDidMount() {
        // const cookie = new Cookies();
        // cookie.get("email");
        const email = localStorage.getItem("email");
        if(email == null){
            console.log("email undef")
        }
        else {
            console.log(email);
            this.updateEmail(email)
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
        const email = this.state.email;
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header email={email} updateEmail ={this.updateEmail}/>
                        <Switch>
                            <Route
                                exact path='/'
                                render={(props) => <Greeting email={email} />}
                            />
                            <Route exact path='/Phones/:phoneId' component={PhoneFullInfo}/>
                            <Route exact path='/Phones' component={PhoneList}/>
                            <Route
                                exact path='/SignIn'
                                render={(props) => <SignIn updateEmail ={this.updateEmail} />}
                            />
                            <Route exact path='/Registration' component={Registration}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
