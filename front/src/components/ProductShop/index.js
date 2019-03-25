import React, {Component} from 'react';

import './productShop.scss';
import {NavLink} from "react-router-dom";

class ProductShop extends Component {

    render() {
        const {productShop} = this.props;
        return(
            <div className="productShop">
                <img className="productShop__img" src={`${productShop.shop.imageName}`} />
                <div>{productShop.shop.name}</div>
                <div>{productShop.price}$</div>
                {/*<div>{productShop.shop.description}</div>*/}
            </div>
        )
    }
}

export default ProductShop;