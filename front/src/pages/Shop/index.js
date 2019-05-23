import React, {Component} from 'react';
import {Card} from "@material-ui/core";

import "./shop.scss"

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MaskedInput from 'react-text-mask';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, '(',  /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}
class Shop extends Component {

    componentDidMount() {
    }

    state = {
        phoneMask: '  (  )  -  -   '
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {phoneMask} = this.state;
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
                            <img className="shopInfo__picSection__picСontainer__pic" src={`http://localhost:8090/image/shop/goshashop.png`} alt={`ddd`} />
                        </div>
                        <div className="shopInfo__picSection__loadButton">
                            <Button variant="contained" size="large" color="primary"  onClick={(event) => this.handleLoadImageClick(event)}>
                                Load image
                            </Button>
                        </div>
                    </Card >
                    <Card className="shopInfo__dataSection" style={{backgroundColor}}>
                        <div className="shopInfo__dataSection__fields">
                            <div className="shopInfo__dataSection__fields__shopName">
                                <TextField
                                    id="outlined-name"
                                    label="Shop name"
                                    // value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </div>
                            <div className="shopInfo__dataSection__fields__phone">
                                <InputLabel htmlFor="formatted-text-mask-input">phone</InputLabel>
                                <Input
                                    value={phoneMask}
                                    onChange={this.handleChange('phoneMask')}
                                    id="formatted-phone-mask-input"
                                    inputComponent={TextMaskCustom}
                                />
                            </div>
                            <div className="shopInfo__dataSection__fields__description">
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows="4"
                                    // defaultValue="Default Value"
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
                                label="Apartment"
                                value={this.state.apartment}
                                onChange={this.handleChange('apartment')}
                                margin="normal"
                                style={style}
                            />
                            </div>
                        </div>
                        <div className="shopInfo__dataSection__saveButton">
                            <Button variant="contained" size="large" color="primary"  onClick={(event) => this.handleLoadImageClick(event)}>
                                Save
                            </Button>
                        </div>
                    </Card>
                </div>
                <h1 className="shopAddProductTitle">
                    Add product for sale
                </h1>
                <Card className="shopAddProductCard" style={{backgroundColor}}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                        // value={state.age}
                        // onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Card >

            </div>
        );
    }

    handleLoadImageClick(event){

    }

}

export default Shop;