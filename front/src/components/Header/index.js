import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import Cookies from 'universal-cookie';

import './header.scss'
import Button from "@material-ui/core/Button";

class Header extends Component {


    handleLogOutClick(event){
        const {updateEmail} = this.props;
        updateEmail("none");
        localStorage.removeItem("user-jwt");
        localStorage.removeItem("email");
        //this.forceUpdate()
    }

    render() {
        const {email} = this.props;
        //console.log(email);
        //const cookies = new Cookies();
        return(
            <div className="header">
                    <div className="header__main">
                        <NavLink className="header__main__nav" to={"/"} style={{ textDecoration: 'none' }}>MyOnliner</NavLink>

                        { (email === "none")
                            ? <NavLink className="header__main__nav" to={"/signIn"} style={{ textDecoration: 'none' }}>Sign in</NavLink>
                            : <div className="header__main__right">
                                <NavLink className="header__main__nav" to={"/cart"} style={{ textDecoration: 'none' }}>Cart</NavLink>
                                <NavLink className="header__main__nav" to={"/profile"} >{email}</NavLink>
                                <Button className="header__main__button" variant="contained" onClick={(event) => this.handleLogOutClick(event)}>
                                    Log out
                                </Button>
                              </div>
                        }

                    </div>
                    <div className="header__categories">
                        <NavLink className="header__categories__nav" to={"/phones"} style={{ textDecoration: 'none' }}>Phones</NavLink>
                        <NavLink className="header__categories__nav" to={"/tvs"} style={{ textDecoration: 'none' }}>TVs</NavLink>
                        <NavLink className="header__categories__nav" to={"/laptops"} style={{ textDecoration: 'none' }}>Laptops</NavLink>
                    </div>

            </div>
        );
    }
}

export default Header;