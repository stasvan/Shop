import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './header.scss'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {
    render() {
        return(
            <div className="header">

                    <div className="header__main">
                        <NavLink className="header__main__nav" to={"/"} >MyOnliner </NavLink>
                        <NavLink className="header__main__nav" to={"/signIn"}>Sign in </NavLink>
                        <NavLink className="header__main__nav" to={"/cart"}>Cart</NavLink>
                    </div>
                    <div className="header__categories">
                        <NavLink className="header__categories__nav" to={"/phones"}>Phones</NavLink>
                        <NavLink className="header__categories__nav" to={"/tvs"}>TVs</NavLink>
                        <NavLink className="header__categories__nav" to={"/laptops"}>Laptops</NavLink>
                    </div>

                    {/*<div className="header__categories">*/}
                        {/*<Nav justify variant="tabs" defaultActiveKey="/">*/}
                            {/*<Nav.Item>*/}
                                {/*<NavLink to={"/phones"} >Phones </NavLink>*/}
                            {/*</Nav.Item>*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link href="/tvs">TVs</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                            {/*<Nav.Item>*/}
                                {/*<Nav.Link to={"/laptops"}>Laptops</Nav.Link>*/}
                            {/*</Nav.Item>*/}
                        {/*</Nav>;*/}
                    {/*</div>*/}

            </div>

        );
    }
}

export default Header;