import React, {Component} from 'react';
import history from '../../services/history';
import {deleteItemFromCart, getCartItems} from "../../services/API/cart";
import CartItem from "../CartItem";

import CircularProgress from '@material-ui/core/CircularProgress';

import Button from "@material-ui/core/Button";

import {showTextErrorToast} from "../../utils/utils";

import './cart.scss';

class Cart extends Component {

    state = {
        cartItems: [],
        isLoading: true
    };

    constructor(props) {
        super(props);
        this.updateCartItems = this.updateCartItems.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
    }

    updateCartItems(data) {
        this.setState({cartItems: data});
    }

    async componentDidMount() {
        const updateCartItems = this.updateCartItems;
        const updateLoading = this.updateLoading;
        const token = localStorage.getItem("user-jwt");
        const {updateRole} = this.props;
        if (token == null) {
            history.push('/sign-in');
        } else {
            await getCartItems(token)
                .then(function (data) {
                    console.log(data);
                    if (data.error == null ){
                        updateCartItems(data);
                    }
                })
                .catch(function() {
                    showTextErrorToast("Bad token, sign in!");
                    updateRole("none");
                    localStorage.removeItem("user-jwt");
                    history.push('/sign-in');
                });
        }
        updateLoading(false);
    }

    handleDeleteClick(id){
        const {cartItems} = this.state;
        const updateCartItems = this.updateCartItems;
        const token = localStorage.getItem("user-jwt");
        const {updateRole} = this.props;
        deleteItemFromCart(token, id)
            .then(function (data) {
                console.log(data);
                if (data.message === "ok"){
                    updateCartItems(cartItems.filter((item => item.cartItemId !== id)));
                } else if (data.message === "error"){
                    showTextErrorToast("Can't delete item");
                }
            })
            .catch(function() {
                showTextErrorToast("Bad token, sign in!");
                localStorage.removeItem("user-jwt");
                updateRole("none");
                history.push('/sign-in');
            });
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="circularProgress">
                    <CircularProgress />
                </div>
            )
        }
        console.log("RENDER CART");
        const {cartItems} = this.state;
        console.log(cartItems);

        return(
            <div className="cartPage">
                <div className="cartPage__title">
                    <h1>Cart</h1>
                </div>
                <div className="cartPage__items">
                    {
                        cartItems.map(cartItem =>
                            <CartItem key={cartItem.cartItemId} cartItem = {cartItem} handleDeleteClick = {this.handleDeleteClick} />
                        )
                    }
                </div>
                {
                    (cartItems.length === 0)
                        ? <div>Your cat is empty!</div>
                        : <div className="cartPage__buttonCheckOut">
                            <Button variant="contained" color="primary" >
                                Check out
                            </Button>
                        </div>
                }

            </div>

        );
    }
}

export default Cart;