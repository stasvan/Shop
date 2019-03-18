import React, {Component} from 'react';

import './phoneFullInfo.scss';
import {getPhoneById} from "../../../services/API/phones";

class PhoneFullInfo extends Component{

    state = {
        phone: {},
    };

    componentDidMount() {
        const id = this.props.match.params.phoneId;
        console.log(id);
        getPhoneById(id)
            .then(data => this.setState({
                phone: data
            }));
    }

    render() {
        const {phone} = this.state;
        console.log(phone.id);
        console.log(phone);

        return(
            <div>
                <div className="phoneCharacteristics">
                    <h3>Characteristics</h3>
                    <ul>
                        <li className="phoneCharacteristics__characteristic">{phone.model}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.year}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.screenResolution}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.screenTechnology}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.cpu}</li>
                        <li className="phoneCharacteristics__characteristic">{phone.ram}</li>
                    </ul>
                </div>
                <div className="pic">
                    <h3>Picture</h3>

                    <img src={`${phone.imagePath}`} />

                </div>
            </div>
        )
    }
}

export default PhoneFullInfo;