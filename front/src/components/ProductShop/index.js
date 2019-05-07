import React, {Component} from 'react';

import './productShop.scss';
import Button from "@material-ui/core/Button";
import {addToCart} from "../../services/API/cart";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import history from "../../services/history";

class ProductShop extends Component {

    render() {
        const {productShop} = this.props;
        const backgroundColor = "#EDEDED";
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
        const {productShop} = this.props;
        if (token !== null) {
            addToCart(productShop.id, productShop.price, token)
                .then(data => {
                    alert(data);
                });
        } else{
            alert("Sign in to add items to your cart")
        }
    }
}

export default ProductShop;