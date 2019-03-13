import React, {Component} from 'react';

import './phoneFullInfo.scss';
import {getPhoneById} from "../../../services/API/phones";

class PhoneFullInfo extends Component{

    state = {
        phone: {}
    };

    componentDidMount() {
        const id = this.props.match.params.phoneId;
        getPhoneById(parseInt(id))
            .then(data => this.setState({
                phone: data
            }))
    }

    render() {
        const {phone} = this.state;
        return(
            <div>
                <div>{phone.id}</div>
                <div>{phone.brand}</div>
                <div>{phone.model}</div>
                <div>{phone.description}</div>
            </div>
        )
    }
}

export default PhoneFullInfo;