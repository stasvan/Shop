import React, {Component} from 'react'

import './tv.scss'
import {NavLink} from "react-router-dom";

class Tv extends Component{

    render() {

        const {tvInfo} = this.props;
        return(
            <div className="phone">
                <div>{tvInfo.model}</div>
                <div>{tvInfo.year}</div>
                <div>{tvInfo.description}</div>
                <div>{tvInfo.price}$</div>
                <NavLink to={""}>Add to cart</NavLink>
            </div>
        )
    }
}

export default Tv;