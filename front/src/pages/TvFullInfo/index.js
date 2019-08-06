import React, {Component} from 'react';

import './tvFullInfo.scss';
import {getTvByBrandNameAndModel} from "../../services/API/tv";
import {getProductShops} from "../../services/API/productShop";
import ProductShop from "../../components/ProductShop"

import {showTextErrorToast} from "../../utils/utils";

import Card from '@material-ui/core/Card';
import CircularProgress from "@material-ui/core/CircularProgress";

class TvFullInfo extends Component{

    state = {
        productShops: [],
        tv: {},
        isLoading: true,
        productId: ""
    };

    async componentDidMount() {
        const model = this.props.match.params.model;
        const brandName = this.props.match.params.brandName;
        //console.log(id);
        await getTvByBrandNameAndModel(brandName, model)
            .then(data => this.setState({
                tv: data,
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
        const {tv, isLoading} = this.state;
        const {productShops} = this.state;
        const {updateRole} = this.props;
        const backgroundColor = "#F6F6F6";
        //console.log(phone.id);
        //console.log(phone);

        if (isLoading){
            return (
                <div className="tvsCircularProgress">
                    <CircularProgress />
                </div>
            )
        }

        return(
            <div>
                <Card className="tvCharacteristics" style={{backgroundColor}}>
                    <h3>Characteristics</h3>
                    <ul>
                        <li className="tvCharacteristics__characteristic">{tv.brand.name}</li>
                        <li className="tvCharacteristics__characteristic">{tv.model}</li>
                        <li className="tvCharacteristics__characteristic">{tv.year}</li>
                        <li className="tvCharacteristics__characteristic">{tv.resolution}</li>
                        <li className="tvCharacteristics__characteristic">{tv.technology}</li>
                        <li className="tvCharacteristics__characteristic">{tv.diagonal}</li>
                    </ul>
                </Card>
                <Card className="tpic" style={{backgroundColor}}>
                    <h3>Picture</h3>
                    <img className="tpic__img" src={`${tv.imageName}`} alt={`${tv.model}`} />
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

export default TvFullInfo;