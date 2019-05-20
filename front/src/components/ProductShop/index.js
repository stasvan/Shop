import React, {Component} from 'react';

import './productShop.scss';
import Button from "@material-ui/core/Button";
import {addItemToCart} from "../../services/API/cart";

import Card from '@material-ui/core/Card';

import {showTextErrorToast, showTextToast} from "../../utils/utils";
import history from "../../services/history";

class ProductShop extends Component {

    render() {
        const {productShop} = this.props;
        const backgroundColor = "#F6F6F6";
        return(
            <Card className="productShop" style={{backgroundColor}}>
                <img className="productShop__img" src={`${productShop.shop.imageName}`} alt = {`${productShop.shop.name}`} />
                <div>{productShop.shop.name}</div>
                <div>{productShop.price}$</div>
                <Button variant="contained"  onClick={(event) => this.addToCart(event)}>
                    Add to cart
                </Button>
                {/*<div>{productShop.shop.description}</div>*/}
            </Card>
        )
    }

    addToCart(event){
        const token = localStorage.getItem("user-jwt");
        const {productShop, updateEmail} = this.props;
        if (token !== null) {
            addItemToCart(productShop.id, productShop.price, token)
                .then(data => {
                    showTextToast(data);
                })
                .catch(function() {
                    showTextErrorToast("Bad token, sign in!");
                    updateEmail("none");
                    localStorage.removeItem("user-jwt");
                    localStorage.removeItem("email");
                    history.push('/sign-in');
                });
        } else{
            showTextErrorToast("Sign in to add items to your cart!")
        }
    }
}

export default ProductShop;