import React, {Component} from 'react';

import './phoneFullInfo.scss';
import {getPhoneById} from "../../../../services/API/phone";
import {getProductShops} from "../../../../services/API/productShop";
import ProductShop from "../../../ProductShop"

class PhoneFullInfo extends Component{

    state = {
        productShops: [],
        phone: {},
        isLoading: true
    };

    componentDidMount() {
        const id = this.props.match.params.phoneId;
        //console.log(id);
        getPhoneById(id)
            .then(data => this.setState({
                phone: data,
                isLoading: false
            }));

        getProductShops(id)
            .then(data => this.setState({
                productShops: data,
            }));
    }

    render() {
        const {phone, isLoading} = this.state;
        const {productShops} = this.state;
        //console.log(phone.id);
        //console.log(phone);

        if (isLoading){
            return '';
        }

        return(
            <div>
                <section className="phoneCharacteristics">
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
                </section>
                <section className="pic">
                    <h3>Picture</h3>
                    <img className="pic__img" src={`${phone.imageName}`} alt={`${phone.model}`} />
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

export default PhoneFullInfo;