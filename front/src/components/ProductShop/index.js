import React, {Component} from 'react';

import './productShop.scss';
import Button from "@material-ui/core/Button";
import {addToCart} from "../../services/API/cart";
import history from "../../services/history";

class ProductShop extends Component {

    render() {
        const {productShop} = this.props;
        return(
            <div className="productShop">
                <img className="productShop__img" src={`${productShop.shop.imageName}`} alt = {`${productShop.shop.name}`} />
                <div>{productShop.shop.name}</div>
                <div>{productShop.price}$</div>
                <Button variant="contained"  onClick={(event) => this.addToCart(event)}>
                    Add to cart
                </Button>
                {/*<div>{productShop.shop.description}</div>*/}
            </div>
        )
    }

    addToCart(event){
        const userId = localStorage.getItem("user-id");
        const token = localStorage.getItem("user-jwt");
        const {productShop} = this.props;
        if ((userId !== null) && (token !== null)) {
            addToCart(userId, productShop.id, productShop.price, token)
                .then(data => {
                    alert(data);
                });
        }
    }
}

export default ProductShop;