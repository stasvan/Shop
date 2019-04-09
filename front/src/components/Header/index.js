import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie';

import './header.scss'
import Button from "@material-ui/core/Button";

class Header extends Component {

    state = {
        email: "none"
    };

    handleLogOutClick(event){
        const {updateEmail} = this.props;
        updateEmail("none");
        const cookies = new Cookies();
        cookies.remove('email');
        localStorage.removeItem("user-jwt");
        this.forceUpdate()
    }

    render() {
        const {email} = this.props;
        //console.log(email);
        //const cookies = new Cookies();
        return(
            <div className="header">
                    <div className="header__main">
                        <NavLink className="header__main__nav" to={"/"} >MyOnliner </NavLink>
                        <NavLink className="header__main__nav" to={"/cart"}>Cart </NavLink>
                        { (email === "none")
                            ? <NavLink className="header__main__nav" to={"/signIn"}>Sign in </NavLink>
                            : <><NavLink to={"/profile"}>{email}</NavLink>
                                <Button variant="contained" color="primary" onClick={(event) => this.handleLogOutClick(event)}>
                                    Log out
                                </Button>
                              </>
                        }
                    </div>
                    <div className="header__categories">
                        <NavLink className="header__categories__nav" to={"/phones"}>Phones</NavLink>
                        <NavLink className="header__categories__nav" to={"/tvs"}>TVs</NavLink>
                        <NavLink className="header__categories__nav" to={"/laptops"}>Laptops</NavLink>
                    </div>

            </div>
        );
    }
}

export default Header;