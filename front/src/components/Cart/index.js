import React, {Component} from 'react';
import history from '../../services/history';
import {deleteItemFromCart, getCartItems} from "../../services/API/cart";
import CartItem from "./CartItem";

class Cart extends Component {

    state = {
        cartItems: []
    };

    constructor(props) {
        super(props);
        this.updateCartItems = this.updateCartItems.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    updateCartItems(data) {
        this.setState({cartItems: data});
    }

    componentDidMount() {
        const {email, updateEmail} = this.props;
        const updateCartItems = this.updateCartItems;
        if (email === "none") {
            return history.push('/signIn');
        } else {
            const token = localStorage.getItem("user-jwt");
            getCartItems(token)
                .then(function (data) {
                    console.log(data);
                    if (data.error == null ){
                        updateCartItems(data);
                    }
                })
                .catch(function() {
                    alert("Bad token, sign in");
                    updateEmail("none");
                    localStorage.removeItem("user-jwt");
                    localStorage.removeItem("email");
                    history.push('/signIn');
                });
        }
    }

    handleDeleteClick(id){
        const {updateEmail} = this.props;
        const {cartItems} = this.state;
        const updateCartItems = this.updateCartItems;
        const token = localStorage.getItem("user-jwt");
        deleteItemFromCart(token, id)
            .then(function (data) {
                console.log(data);
                if (data.message === "ok"){
                    updateCartItems(cartItems.filter((item => item.cartItemId !== id)));
                } else if (data.message === "error"){
                    alert("Can't delete item");
                } else if (data.error !== null) {
                    alert("Bad token, can't delete item, sign in");
                    updateEmail("none");
                    localStorage.removeItem("user-jwt");
                    localStorage.removeItem("email");
                    history.push('/signIn');
                }
            });
    }

    render() {
        const {cartItems} = this.state;
        const {updateEmail} = this.props;
        return(
            <div>
                <h1>Cart</h1>
                <div>
                    {
                        cartItems.map(cartItem =>
                            <CartItem key={cartItem.cartItemId} cartItem = {cartItem} updateEmail = {updateEmail} handleDeleteClick = {this.handleDeleteClick} />
                        )
                    }
                </div>
            </div>

        );
    }
}

export default Cart;