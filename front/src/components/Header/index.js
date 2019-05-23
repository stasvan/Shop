import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './header.scss'

import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import history from '../../services/history';
import {parseJwt} from "../../utils/utils";
import {validateToken} from "../../services/API/token";

class Header extends Component {

    componentDidMount() {
        const token = localStorage.getItem("user-jwt");
        const {updateRole} = this.props;
        if (token == null){
            console.log("do auth");
            updateRole("none");
        } else {
            validateToken(token).then(function (message) {
                console.log(message);
                if (message === "valid") {
                    const data = parseJwt(token);
                    console.log(data);
                    updateRole(data.role);
                } else {
                    updateRole("none");
                }
            });
        }
    }

    constructor(props) {
        super(props);
        this.handleLogOutClick = this.handleLogOutClick.bind(this);
    }

    handleLogOutClick(event){
        const {updateRole} = this.props;
        localStorage.removeItem("user-jwt");
        history.push('/sign-in');
        updateRole("none");
    }



    render() {
        console.log("render");
        //const token = localStorage.getItem("user-jwt");
        const {role} = this.props;
        console.log(role);
        const handleLogOutClick = this.handleLogOutClick;
        const textStyle = { textDecoration: 'none' };

        function UserHeader() {
            return <div className="header__main__right">
                <NavLink className="header__main__nav" to={"/cart"} style={textStyle}>
                    Cart
                    <ShoppingCartIcon />
                </NavLink>
                <NavLink className="header__main__nav" to={"/profile"} style={textStyle}>
                    Profile
                    <PersonIcon />
                </NavLink>
                <Button className="header__main__button" size="small" variant="contained" onClick={(event) => handleLogOutClick(event)}>
                    Log out
                </Button>
            </div>;
        }

        function AdminHeader() {
            return <div className="header__main__right">
                <NavLink className="header__main__nav" to={"/shop"} style={textStyle}>
                    Shop
                    <LocalMallIcon />
                </NavLink>
                <NavLink className="header__main__nav" to={"/cart"} style={textStyle}>
                    Cart
                    <ShoppingCartIcon />
                </NavLink>
                <NavLink className="header__main__nav" to={"/profile"} style={textStyle}>
                    Profile
                    <PersonIcon />
                </NavLink>
                <Button className="header__main__button" size="small" variant="contained" onClick={(event) => handleLogOutClick(event)}>
                    Log out
                </Button>
            </div>;
        }

        function SignInHeader(props) {
            return <NavLink className="header__main__nav" to={"/sign-in"} style={textStyle}>Sign in</NavLink>;
        }

        let renderHeaderMain;
        if (role === "none"){
            renderHeaderMain = SignInHeader();
        } else if (role === "user"){
            renderHeaderMain = UserHeader();
        } else if (role === "admin"){
            renderHeaderMain = AdminHeader();
        }
        return(
            <div className="header">
                    <div className="header__main">
                        <NavLink className="header__main__nav" to={"/"} style={textStyle}>MyOnliner</NavLink>
                        {
                            renderHeaderMain
                        }
                    </div>
                    <div className="header__categories">
                        <NavLink className="header__categories__nav" to={"/phones"} style={textStyle}>Phones</NavLink>
                        <NavLink className="header__categories__nav" to={"/tvs"} style={textStyle}>TVs</NavLink>
                        <NavLink className="header__categories__nav" to={"/laptops"} style={textStyle}>Laptops</NavLink>
                    </div>

            </div>
        );
    }
}

export default Header;