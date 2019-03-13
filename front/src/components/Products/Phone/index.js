import React, {Component} from 'react';

import './phone.scss';
import {NavLink} from "react-router-dom";

class Phone extends Component {

    render() {
        const {phoneInfo} = this.props;
        return(
            <div className="phone">
                <div>{phoneInfo.brand}</div>
                <div>{phoneInfo.model}</div>
                <div>{phoneInfo.year}</div>
                <NavLink to={`phones/${phoneInfo.id}`}>Info</NavLink>
            </div>
        )
    }
}

export default Phone;