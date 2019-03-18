import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header'
import PhoneList from './components/Products/Phones/PhoneList'
import PhoneFullInfo from "./components/Products/Phones/PhoneFullInfo";
import SignIn from "./components/SignIn";
import Greeting from "./components/Greeting";
import Registration from "./components/Registration";



class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Greeting}/>
              <Route exact path='/Phones/:phoneId' component={PhoneFullInfo}/>
              <Route exact path='/Phones' component={PhoneList}/>
              <Route exact path='/SignIn' component={SignIn}/>
              <Route exact path='/Registration' component={Registration}/>
            </Switch>
        </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
