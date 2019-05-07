import React, {Component} from 'react';

import './phoneFullInfo.scss';
import {getPhoneById} from "../../../../services/API/phone";
import {getProductShops} from "../../../../services/API/productShop";
import ProductShop from "../../../ProductShop"

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

class PhoneFullInfo extends Component{

    state = {
        productShops: [],
        phone: {},
        isLoading: true,
        productId: ""
    };

    async componentDidMount() {
        const id = this.props.match.params.phoneId;
        //console.log(id);
        await getPhoneById(id)
            .then(data => this.setState({
                phone: data,
                productId: data.product.id,
                isLoading: false
            }));
        getProductShops(this.state.productId)
            .then(data => this.setState({
                productShops: data,
            }));
    }

    render() {
        const {phone, isLoading} = this.state;
        const {productShops} = this.state;
        const backgroundColor = "#EDEDED";
        //console.log(phone.id);
        //console.log(phone);

        if (isLoading){
            return '';
        }

        return(
            <div>
                <Card className="phoneCharacteristics" style={{backgroundColor}}>
                    <h3>Characteristics</h3>
                    <ul>
                        <li className="phoneCharacteristics__characteristic">{phone.brand.name}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.model}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.year}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.screenResolution}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.screenTechnology}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.cpu}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.ram}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.camera}</li>
                    </ul>
                </Card>
                <Card className="ppic" style={{backgroundColor}}>
                    <h3>Picture</h3>
                    <img className="ppic__img" src={`${phone.imageName}`} alt={`${phone.model}`} />
                </Card>
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

export default PhoneFullInfo;