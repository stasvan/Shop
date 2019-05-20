import React, {Component} from 'react';
import { getPhones } from "../../../../services/API/phone";

import Phone from '../Phone'

class PhoneList extends Component{

    state = {
        phones: [],
        limit: 5,
        page: 0
    };

    componentDidMount() {
        const {page, limit} = this.state;
        getPhones(page, limit)
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