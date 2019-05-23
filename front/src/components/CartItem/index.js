import React, {Component} from 'react';
import Button from "@material-ui/core/Button";

import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete'

import './cartItem.scss'

class CartItem extends Component{

    render() {
        const {cartItem, handleDeleteClick} = this.props;
        const backgroundColor = '#F6F6F6';
        return (
        <Card key={cartItem.cartItemId} className="cartItem" style={{backgroundColor}}>
            <section className="cartItemPic">
                <img className="cartItemPic__img" src={`${cartItem.imageName}`} alt={`${cartItem.model}`} />
            </section>
            <section className="cartItemInfo">
                <div>
                    {cartItem.brand + " " + cartItem.model}
                </div>
                <div className="cartItemInfo__shop">
                    {cartItem.shopName + " " + cartItem.price + "$"}
                </div>
            </section>
            <section className="deleteButton" >
                <Button variant="contained" onClick={(event) => handleDeleteClick(cartItem.cartItemId)}>
                    <DeleteIcon />
                </Button>
            </section>
        </Card>
        )
    }

}


export default CartItem;