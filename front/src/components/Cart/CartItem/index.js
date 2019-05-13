import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import './cartItem.scss'

import {deleteItemFromCart} from "../../../services/API/cart";
import history from "../../../services/history";

class CartItem extends Component{
    //
    // state = {
    //     cartItem: {}
    // };
    //
    // handleDeleteClick(){
    //     const {rerender, updateEmail} = this.props;
    //     const {cartItem} = this.state;
    //     const token = localStorage.getItem("user-jwt");
    //     deleteItemFromCart(token, cartItem.cartItemId)
    //         .then(function (data) {
    //             console.log(data);
    //             if (data.message === "ok"){
    //
    //             } else if (data.message === "error"){
    //                 alert("Can't delete item");
    //             } else if (data.error !== null) {
    //                 alert("Bad token, can't delete item, sign in");
    //                 updateEmail("none");
    //                 localStorage.removeItem("user-jwt");
    //                 localStorage.removeItem("email");
    //                 history.push('/signIn');
    //             }
    //         });
    //     rerender(cartItem.cartItemId);
    // }
    //
    // componentDidMount() {
    //     const {cartItem} = this.props;
    //     this.setState({cartItem: cartItem});
    // }

    render() {
        const {cartItem, handleDeleteClick} = this.props;
        return (
        <Card key={cartItem.cartItemId} className="cartItem">
            {cartItem.brand + " " + cartItem.model + " " + cartItem.shopName}
            <section className="cartItemPic">
                <img className="cartItemPic__img" src={`${cartItem.imageName}`} alt={`${cartItem.model}`} />
            </section>
            <Button variant="contained" onClick={(event) => handleDeleteClick(cartItem.cartItemId)}>
                Delete
            </Button>
        </Card>
        )
    }

}


export default CartItem;