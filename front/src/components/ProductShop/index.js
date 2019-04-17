import React, {Component} from 'react';

import './productShop.scss';
import Button from "@material-ui/core/Button";

class ProductShop extends Component {

    render() {
        const {productShop} = this.props;
        return(
            <div className="productShop">
                <img className="productShop__img" src={`${productShop.shop.imageName}`} alt = {`${productShop.shop.name}`} />
                <div>{productShop.shop.name}</div>
                <div>{productShop.price}$</div>
                <Button variant="contained"  onClick={(event) => this.handleClick(event)}>
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