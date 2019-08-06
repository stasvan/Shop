import React, {Component} from 'react';
import Button from "@material-ui/core/Button/index";

import Card from '@material-ui/core/Card/index';
import CardActionArea from '@material-ui/core/CardActionArea';
import DeleteIcon from '@material-ui/icons/Delete'

import './cartItem.scss'
import history from "../../services/history";
import MaskedInput from "react-text-mask";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[1-9]/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

class CartItem extends Component{

    state = {
        count: 1
    };

    handleChange = name => event => {
        let value = event.target.value;

        if ((value !== '1') && (value !== '2') && (value !== '3') &&
            (value !== '4') && (value !== '5') && (value !== '6') &&
            (value !== '7') && (value !== '8') && (value !== '9')
        ){
            value = 1
        }
        this.setState({
            [name]: value,
        });
    };

    render() {
        const {cartItem, handleDeleteClick} = this.props;
        const {count} = this.state;
        const backgroundColor = '#F6F6F6';
        const brandName = cartItem.brand.replace(/ /g, "-");
        const model = cartItem.model.replace(/ /g, "-");
        return (
        <Card key={cartItem.cartItemId} className="cartItem" style={{backgroundColor}} >
            <div className="cartItemPic">
                <CardActionArea onClick={() => history.push(`${cartItem.productType}s/${brandName}/${model}`)}>
                    <img className="cartItemPic__img" src={`${cartItem.imageName}`} alt={`${cartItem.model}`} />
                </CardActionArea>
            </div>
            <section className="cartItemInfo">
                <div>
                    {cartItem.brand + " " + cartItem.model}
                </div>
                <div className="cartItemInfo__shop">
                    {cartItem.shopName + " " + cartItem.price + "$"}
                </div>
            </section>
            <section className="deleteButton" >
                <Button variant="contained" onClick={(event) => handleDeleteClick(cartItem.cartItemId)}>
                    <DeleteIcon />
                </Button>
            </section>
            <section className="cartItemCount">
                <InputLabel className="cartItemCount__label" htmlFor="formatted-count-mask-input">amount</InputLabel>
                <Input
                    value={count}
                    onChange={this.handleChange('count')}
                    id="formatted-count-mask-input"
                    inputComponent={TextMaskCustom}
                    style={{width: 15}}
                />

            </section>
        </Card>
        )
    }

}


export default CartItem;