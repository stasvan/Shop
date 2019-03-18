import React, {Component} from 'react';

import './phone.scss';
import {NavLink} from "react-router-dom";

class Phone extends Component {

    render() {
        const {phone} = this.props;
        return(
            <div className="phone">
                <div>{phone.brand.name}</div>
                <div>{phone.model}</div>
                <div>{phone.year}</div>
                <NavLink to={`phones/${phone.id}`}>Info</NavLink>
            </div>
        )
    }
}

export default Phone;