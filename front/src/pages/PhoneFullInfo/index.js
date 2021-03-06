import React, {Component} from 'react';

import './phoneFullInfo.scss';
import {getPhoneByBrandNameAndModel} from "../../services/API/phone";
import {getProductShops} from "../../services/API/productShop";
import ProductShop from "../../components/ProductShop"

import {showTextErrorToast} from "../../utils/utils";

import Card from '@material-ui/core/Card';
import CircularProgress from "@material-ui/core/CircularProgress";

class PhoneFullInfo extends Component{

    state = {
        productShops: [],
        phone: {},
        isLoading: true,
        productId: ""
    };

    async componentDidMount() {
        const model = this.props.match.params.model;
        const brandName = this.props.match.params.brandName;
        //console.log(id);
        await getPhoneByBrandNameAndModel(brandName, model)
            .then(data => this.setState({
                phone: data,
                productId: data.product.id,
            }))
            .catch((err) => {
                showTextErrorToast(err)
            });
        await getProductShops(this.state.productId)
            .then(data => this.setState({
                productShops: data,
            }));
        this.setState({isLoading: false});
    }

    render() {
        const {phone, isLoading} = this.state;
        const {productShops} = this.state;
        const {updateRole} = this.props;
        const backgroundColor = "#F6F6F6";
        //console.log(phone.id);
        //console.log(phone);

        if (isLoading){
            return (
                <div className="phonesCircularProgress">
                    <CircularProgress />
                </div>
            )
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
                        <ProductShop key={productShop.id} productShop = {productShop} updateRole = {updateRole}/>
                    )
                }
                </div>
            </div>
        )

    }
}

export default PhoneFullInfo;