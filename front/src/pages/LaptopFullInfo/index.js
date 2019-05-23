import React, {Component} from 'react';

import './laptopFullInfo.scss';
import {getLaptopByBrandNameAndModel} from "../../../../services/API/laptop";
import {getProductShops} from "../../../../services/API/productShop";
import ProductShop from "../../../ProductShop"

import {showTextErrorToast} from "../../../../utils/utils";

import Card from '@material-ui/core/Card';

class LaptopFullInfo extends Component{

    state = {
        productShops: [],
        laptop: {},
        isLoading: true,
        productId: ""
    };

    async componentDidMount() {
        const model = this.props.match.params.model;
        const brandName = this.props.match.params.brandName;
        //console.log(id);
        await getLaptopByBrandNameAndModel(brandName, model)
            .then(data => this.setState({
                laptop: data,
                productId: data.product.id,
                isLoading: false
            }))
            .catch((err) => {
                showTextErrorToast(err)
            });
        getProductShops(this.state.productId)
            .then(data => this.setState({
                productShops: data,
            }));
    }

    render() {
        const {laptop, isLoading} = this.state;
        const {productShops} = this.state;
        const {updateEmail} = this.props;
        const backgroundColor = "#F6F6F6";
        //console.log(phone.id);
        //console.log(phone);

        if (isLoading){
            return '';
        }

        return(
            <div>
                <Card className="laptopCharacteristics" style={{backgroundColor}}>
                    <h3>Characteristics</h3>
                    <ul>
                        <li className="laptopCharacteristics__characteristic">{laptop.brand.name}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.model}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.year}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.screenResolution}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.screenTechnology}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.cpu}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.ram}</li>
                        <li className="laptopCharacteristics__characteristic">{laptop.camera}</li>
                    </ul>
                </Card>
                <Card className="lpic" style={{backgroundColor}}>
                    <h3>Picture</h3>
                    <img className="lpic__img" src={`${laptop.imageName}`} alt={`${laptop.model}`} />
                </Card>
                <div>
                    {
                        productShops.map(productShop =>
                            <ProductShop key={productShop.id} productShop = {productShop} updateEmail = {updateEmail}/>
                        )
                    }
                </div>
            </div>
        )

    }
}

export default LaptopFullInfo;