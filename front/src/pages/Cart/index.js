import React, {Component} from 'react';
import history from '../../services/history';
import {deleteItemFromCart, getCartItems} from "../../services/API/cart";
import CartItem from "../../components/CartItem";

import CircularProgress from '@material-ui/core/CircularProgress/index';

import Button from "@material-ui/core/Button/index";
import Card from '@material-ui/core/Card'

import {showTextErrorToast, showTextToast} from "../../utils/utils";
import {getUserAddress} from "../../services/API/address";

import './cart.scss';
import TextField from "@material-ui/core/TextField";

class Cart extends Component {

    state = {
        cartItems: [],
        isLoading: true,
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: ''
    };

    constructor(props) {
        super(props);
        this.updateCartItems = this.updateCartItems.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
        this.handleCheckOutClick = this.handleCheckOutClick.bind(this);
    }

    updateCartItems(data) {
        this.setState({cartItems: data});
    }

    updateAddress(data) {
        if (data.apartment == null){
            data.apartment = ''
        }
        this.setState({
            country: data.country,
            city: data.city,
            street: data.street,
            house: data.house,
            apartment: data.apartment
        })
    }

    async componentDidMount() {
        const updateCartItems = this.updateCartItems;
        const updateAddress = this.updateAddress;
        const updateLoading = this.updateLoading;
        const token = localStorage.getItem("user-jwt");
        const {updateRole} = this.props;
        let isError = false;
        if (token == null) {
            history.push('/sign-in');
        } else {
            await getCartItems(token)
                .then(function (data) {
                    if (data.error == null ){
                        updateCartItems(data);
                    }
                })
                .catch(function() {
                    isError = true;
                });
            await getUserAddress(token)
                .then(function (data) {
                    updateAddress(data)
                })
                .catch(function() {
                    isError = true;
                });
        }
        updateLoading(false);
        if (isError){
            showTextErrorToast("Error");
            updateRole("none");
            localStorage.removeItem("user-jwt");
            history.push('/sign-in');
        }
    }

    handleDeleteClick(id){
        const {cartItems} = this.state;
        const updateCartItems = this.updateCartItems;
        const token = localStorage.getItem("user-jwt");
        const {updateRole} = this.props;
        deleteItemFromCart(token, id)
            .then(function (data) {
                if (data.message === "ok"){
                    updateCartItems(cartItems.filter((item => item.cartItemId !== id)));
                } else if (data.message === "error"){
                    showTextErrorToast("Error");
                }
            })
            .catch(function() {
                showTextErrorToast("Error");
                localStorage.removeItem("user-jwt");
                updateRole("none");
                history.push('/sign-in');
            });
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    //check address fields, then delete all cart items from db
    handleCheckOutClick(){
        const {cartItems, country, city, street, house, apartment} = this.state;
        const token = localStorage.getItem("user-jwt");
        const {updateRole} = this.props;
        if ((country !== '') && (city !== '') &&
            (street !== '') && (house !== '')
        ) {
            cartItems.map(cartItem => {
                    const id = cartItem.cartItemId;
                    deleteItemFromCart(token, id)
                        .then(function (data) {
                            if (data.message === "ok"){

                            } else if (data.message === "error"){
                                showTextErrorToast("Error");
                            }
                        })
                        .catch(function() {
                            showTextErrorToast("Bad token, sign in!");
                            localStorage.removeItem("user-jwt");
                            updateRole("none");
                            history.push('/sign-in');
                        });
                }
            );
            showTextToast("Thank you for your order!");
            this.setState({cartItems: []})
        } else {
            showTextErrorToast("Fill in all required fields!");
        }

    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="cartCircularProgress">
                    <CircularProgress />
                </div>
            )
        }
        // console.log("RENDER CART");
        const {cartItems} = this.state;
        const backgroundColor = "#F6F6F6";
        const style = {width: 200};

        if (cartItems.length === 0){
            return (
                <div className="cartPage">
                    <div className="cartPage__title">
                        <h1>Cart</h1>
                    </div>
                    <h1>Your cart is empty!</h1>
                </div>
            )
        }

        return(
            <div className="cartPage">
                <div className="cartPage__title">
                    <h1>Cart</h1>
                </div>
                <div className="cartPage__cart">
                    <div className="cartPage__cart__items">
                        {
                            cartItems.map(cartItem =>
                                <CartItem key={cartItem.cartItemId} cartItem = {cartItem} handleDeleteClick = {this.handleDeleteClick} />
                            )
                        }
                    </div>
                </div>
                <Card className="cartPage__address" style={{backgroundColor}}>
                    <div className="cartPage__address__field">
                        <TextField
                            id="standard-country"
                            label="Country"
                            value={this.state.country}
                            onChange={this.handleChange('country')}
                            margin="normal"
                            style={style}
                        />
                    </div>
                    <div className="cartPage__address__field">
                        <TextField
                            id="standard-city"
                            label="City"
                            value={this.state.city}
                            onChange={this.handleChange('city')}
                            margin="normal"
                            style={style}
                        />
                    </div>
                    <div className="cartPage__address__field">
                        <TextField
                            id="standard-street"
                            label="Street"
                            value={this.state.street}
                            onChange={this.handleChange('street')}
                            margin="normal"
                            style={style}
                        />
                    </div>
                    <div className="cartPage__address__field">
                        <TextField
                            id="standard-house"
                            label="House"
                            value={this.state.house}
                            onChange={this.handleChange('house')}
                            margin="normal"
                            style={style}
                        />
                    </div>
                    <div className="cartPage__address__field">
                        <TextField
                            id="standard-apartment"
                            label="Apartment (optional)"
                            value={this.state.apartment}
                            onChange={this.handleChange('apartment')}
                            margin="normal"
                            style={style}
                        />
                    </div>
                    <div className="cartPage__address__buttonCheckOut">
                        <Button variant="contained" color="primary" onClick={(event) => this.handleCheckOutClick(event)}>
                            Check out
                        </Button>
                    </div>
                </Card>
            </div>

        );
    }
}

export default Cart;