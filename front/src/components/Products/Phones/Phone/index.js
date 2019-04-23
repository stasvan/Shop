import React, {Component} from 'react';

import './phone.scss';
import {NavLink} from "react-router-dom";

class Phone extends Component {

    render() {
        const {phone} = this.props;
        return(
            <NavLink className="navp" to={`phones/${phone.id}`}  style={{ textDecoration: 'none' }} >

                <section className="pchr">
                    <div>{phone.brand.name}</div>
                    <div>{phone.model}</div>
                    <div>{phone.year}</div>
                    <div>{phone.cpu}</div>
                </section>

                <section className="phonePic">
                    <img className="phonePic__img" src={`${phone.imageName}`} alt={`${phone.model}`} />
                </section>

            </NavLink>
        )
    }
}

export default Phone;