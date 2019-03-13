import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './header.scss'

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div>
                    <NavLink to={"/"} >MyOnliner </NavLink>
                    <NavLink to={"/signin"}>Sign in </NavLink>
                    <NavLink to={"/cart"}>Cart</NavLink>
                </div>
                <div className="header__categories">
                    <NavLink to={"/phones"}>Phones</NavLink>
                    <NavLink to={"/tvs"}>TVs</NavLink>
                    <NavLink to={"/laptops"}>Laptops</NavLink>
                </div>
            </div>

        );
    }
}

export default Header;