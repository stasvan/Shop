import React, {Component} from 'react';

import './productShop.scss';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

class ProductShop extends Component {

    render() {
        const {productShop} = this.props;
        return(
            <div className="productShop">
                <img className="productShop__img" src={`${productShop.shop.imageName}`} />
                <div>{productShop.shop.name}</div>
                <div>{productShop.price}$</div>
                <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event)}>
                    Add to cart
                </Button>
                {/*<div>{productShop.shop.description}</div>*/}
            </div>
        )
    }

    handleClick(event){

    }
}

export default ProductShop;