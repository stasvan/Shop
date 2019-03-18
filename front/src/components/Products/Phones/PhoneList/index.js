import React, {Component} from 'react';
import { getPhones } from "../../../services/API/phones";

import Phone from '../Phone'

class PhoneList extends Component{

    state = {
        phones: []
    };

    componentDidMount() {
        getPhones()
            .then(data => this.setState({
                phones: data
            }))
    }

    render() {
        const  {phones} = this.state;
        return(
            <div>
                {
                    phones.map(phone =>
                        <Phone key={phone.id} phone = {phone} />
                    )
                }
            </div>
        )
    }

}

export default PhoneList;