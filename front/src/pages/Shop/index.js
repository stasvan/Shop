import React, {Component} from 'react';
import {Card} from "@material-ui/core";

import "./shop.scss"

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import history from "../../services/history";
import {getShopInfo} from "../../services/API/shop";
import {getProductTypes, getProductsByType} from "../../services/API/productTypes";
import {showTextErrorToast} from "../../utils/utils";
import CircularProgress from "@material-ui/core/CircularProgress";
import {changeShopInfo} from "../../services/API/shop";
import MuiPhoneNumber from "material-ui-phone-number";
import {changeShopImage} from "../../services/API/image";

class Shop extends Component {

    state = {
        isLoading: true,
        shopExists: false,

        selectedImage: null,
        description: '',
        name: '',
        image: 'empty_shop.png',
        phone: '',
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',

        productTypes: [],
        type: null,
        products: [],
        product: null,
    };

    constructor(props) {
        super(props);
        this.updateLoading = this.updateLoading.bind(this);
        this.updateShopInfo = this.updateShopInfo.bind(this);
        this.updateProductTypes = this.updateProductTypes.bind(this);
        this.shopExists = this.shopExists.bind(this);
    }

    async componentDidMount() {
        const updateLoading = this.updateLoading;
        const updateShopInfo = this.updateShopInfo;
        const updateProductTypes = this.updateProductTypes;
        const shopExists = this.shopExists;
        const token = localStorage.getItem("user-jwt");
        const {updateRole, role} = this.props;
        let isError = false;
        if (role !== "admin") {
            history.push('/');
        } else {
            await getShopInfo(token)
                .then(function (data) {
                    if (data.message === "shop exists"){
                        shopExists(true);
                        updateShopInfo(data.shop);
                    } else{
                        shopExists(false);
                        showTextErrorToast("Create your shop!");
                    }
                })
                .catch(function() {
                    isError = true;
                });
            await getProductTypes()
                .then(function (data) {
                    updateProductTypes(data);
                })
        }
        updateLoading(false);
        if (isError){
            showTextErrorToast("Error");
            updateRole("none");
            localStorage.removeItem("user-jwt");
            history.push('/sign-in');
        }
    }

    shopExists(state){
        this.setState({
            shopExists: state
        })
    }

    updateProductTypes(data){
        console.log(data);
        data.push(null);
        this.setState({
            productTypes: data,
            // type: data[0]
        })
    }

    updateShopInfo(data){
        if (data.address.apartment === null){
            data.address.apartment = ''
        }
        this.setState({
            country: data.address.country,
            city: data.address.city,
            street: data.address.street,
            house: data.address.house,
            apartment: data.address.apartment,
            phone: data.phoneNumber,
            description: data.description,
            name: data.name,
            image: data.imageName
        })
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleTypeChange = name => event => {
        const type = event.target.value;
        console.log(type)
        // this.updateProducts(type);
        this.setState({
            [name]: type,
        });
    };

    handlePhoneChange = value  => {
        console.log(value)
        this.setState({
            phone: value
        });
    }

    updateProducts(type){
        const products = getProductsByType();
        this.setState({products: products})
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="shopCircularProgress">
                    <CircularProgress />
                </div>
            )
        }

        const backgroundColor = "#F6F6F6";
        const style = {width: 200};
        return(
            <div>
                <h1 className="shopPageTitle">
                    Your Shop
                </h1>
                <div className="shopInfo">

                    <Card className="shopInfo__picSection" style={{backgroundColor}}>
                        <div className="shopInfo__picSection__picСontainer">
                            <img className="shopInfo__picSection__picСontainer__pic" src={this.state.image} alt={`ddd`} />
                        </div>
                        <div className="shopInfo__picSection__loadButton">
                            <input type="file" onChange={this.handleLoadImageClick}/>
                            <Button variant="contained" size="large" color="primary" onClick={(event) => this.handleSaveImageClick(event)}>
                                Save image
                            </Button>
                        </div>
                    </Card >
                    <Card className="shopInfo__dataSection" style={{backgroundColor}}>
                        <div className="shopInfo__dataSection__fields">
                            <div className="shopInfo__dataSection__fields__shopName">
                                <TextField
                                    id="outlined-shop-name"
                                    label="Shop name"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <div className="shopInfo__dataSection__fields__phone">
                                <InputLabel className="inputPhoneLabel" htmlFor="formatted-phone-mask-input">phone</InputLabel>
                                <MuiPhoneNumber value={this.state.phone} onlyCountries = {['by','ru','ua']} defaultCountry={'by'} onChange={this.handlePhoneChange}/>
                            </div>
                            <div className="shopInfo__dataSection__fields__description">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows="4"
                                    value={this.state.description}
                                    onChange={this.handleChange('description')}
                                    margin="normal"
                                    variant="outlined"
                                    style={{width: 600}}
                                />
                            </div>
                        </div>
                        <div className="shopInfo__dataSection__address">
                            <div className="shopInfo__dataSection__address__field">
                                <TextField
                                    id="standard-country"
                                    label="Country"
                                    value={this.state.country}
                                    onChange={this.handleChange('country')}
                                    margin="normal"
                                    style={style}
                                />
                            </div>
                            <div className="shopInfo__dataSection__address__field">
                                <TextField
                                    id="standard-city"
                                    label="City"
                                    value={this.state.city}
                                    onChange={this.handleChange('city')}
                                    margin="normal"
                                    style={style}
                                />
                            </div>
                            <div className="shopInfo__dataSection__address__field">
                                <TextField
                                    id="standard-street"
                                    label="Street"
                                    value={this.state.street}
                                    onChange={this.handleChange('street')}
                                    margin="normal"
                                    style={style}
                                />
                            </div>
                            <div className="shopInfo__dataSection__address__field">
                                <TextField
                                    id="standard-house"
                                    label="House"
                                    value={this.state.house}
                                    onChange={this.handleChange('house')}
                                    margin="normal"
                                    style={style}
                                />
                            </div>
                            <div className="shopInfo__dataSection__address__field">
                                <TextField
                                    id="standard-apartment"
                                    label="Apartment (optional)"
                                    value={this.state.apartment}
                                    onChange={this.handleChange('apartment')}
                                    margin="normal"
                                    style={style}
                                />
                            </div>
                        </div>
                        <div className="shopInfo__dataSection__saveButton">
                            <Button variant="contained" size="large" color="primary" onClick={(event) => this.handleSaveShopInfoClick(event)}>
                                Save
                            </Button>
                        </div>
                    </Card>
                </div>
                <h1 className="shopAddProductTitle">
                    Add product for sale
                </h1>
                <Card className="shopAddProductCard" style={{backgroundColor}}>
                    <InputLabel htmlFor="product-type-simple">Product type</InputLabel>
                    <Select
                        value={this.state.type}
                        onChange={this.handleTypeChange('type')}
                        inputProps={{
                            name: 'product-type',
                            id: 'product-type-simple',
                        }}
                    >
                        {this.state.productTypes.map(type =>
                            <MenuItem key={type} value={type}>{type}</MenuItem>
                        )}
                    </Select>
                    {
                        this.state.type ? (
                            <React.Fragment>
                                <div>efwef</div>
                                {/*<InputLabel htmlFor="products-simple">Products</InputLabel>*/}
                                {/*<Select*/}
                                {/*    value={this.state.product}*/}
                                {/*    onChange={this.handleChange('product')}*/}
                                {/*    inputProps={{*/}
                                {/*        name: 'product',*/}
                                {/*        id: 'products-simple',*/}
                                {/*    }}*/}
                                {/*>*/}
                                {/*    {this.state.products.map(product =>*/}
                                {/*        <MenuItem key={product} value={product}>{product}</MenuItem>*/}
                                {/*    )}*/}
                                {/*</Select>*/}
                            </React.Fragment>
                        ) : null
                    }
                </Card >
            </div>
        );
    }

    handleLoadImageClick = event => {
        this.setState({
            selectedImage: event.target.files[0]
        });
    }

    handleSaveImageClick = () => {
        const token = localStorage.getItem("user-jwt");
        const fd = new FormData();
        const {name} = this.state;
        fd.append('image', this.state.selectedImage);
        // for (var pair of fd.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]);
        // }
        changeShopImage(name, fd, token)
            .then(res => {
                console.log(res);
            })
    }

    handleSaveShopInfoClick(event){
        const {name, description, phone,
            country, city, street, house, apartment} = this.state;
        const token = localStorage.getItem("user-jwt");
        if ((name !== '') && (phone !== '') && (description !== '')
            && (country !== '') && (city !== '') && (street !== '') && (house !== '')
        ){
            changeShopInfo(token, name, description, phone,
                country, city, street, house, apartment)
                .then(data => {
                    data.map(message => {
                            showTextErrorToast(message)
                            if (message === 'New info saved successfully') {
                                // history.push('/my-shop');
                            }
                        }
                    )
                });

        } else {
            showTextErrorToast("Fill in all the fields");
        }
    }

}

export default Shop;