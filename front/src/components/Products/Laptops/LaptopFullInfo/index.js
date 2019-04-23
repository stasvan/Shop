import React, {Component} from 'react';

import './laptopFullInfo.scss';
import {getLaptopById} from "../../../../services/API/laptop";
import {getProductShops} from "../../../../services/API/productShop";
import ProductShop from "../../../ProductShop"

class LaptopFullInfo extends Component{

    state = {
        productShops: [],
        laptop: {},
        isLoading: true,
        productId: ''
    };

    async componentDidMount() {
        const id = this.props.match.params.laptopId;
        //console.log(id);
        await getLaptopById(id)
            .then(data => this.setState({
                laptop: data,
                productId: data.product.id,
                isLoading: false
            }));
        getProductShops(this.state.productId)
            .then(data => this.setState({
                productShops: data,
            }));
    }

    render() {
        const {laptop, isLoading} = this.state;
        const {productShops} = this.state;

        if (isLoading){
            return '';
        }

        return(
            <div>
                <section className="laptopCharacteristics">
                    <h3>Characteristics</h3>
                    <ul>
                        <li className="laptopCharacteristics__characteristic">{laptop.brand.name}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.model}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.year}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.screenResolution}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.screenTechnology}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.screenDiagonal}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.cpu}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.ram}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.storage}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.camera}</li>
                    </ul>
                </section>
                <section className="lpic">
                    <h3>Picture</h3>
                    <img className="lpic__img" src={`${laptop.imageName}`} alt={`${laptop.model}`} />
                </section>
                <div>
                    {
                        productShops.map(productShop =>
                            <ProductShop key={productShop.id} productShop = {productShop} />
                        )
                    }
                </div>
            </div>
        )

    }
}

export default LaptopFullInfo;