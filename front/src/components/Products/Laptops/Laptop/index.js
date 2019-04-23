import React, {Component} from 'react';

import './laptop.scss';
import {NavLink} from "react-router-dom";

class Laptop extends Component {

    render() {
        const {laptop} = this.props;
        return(
            <NavLink className="navl" to={`laptops/${laptop.id}`}  style={{ textDecoration: 'none' }} >

                <section className="lchr">
                    <div>{laptop.brand.name}</div>
                    <div>{laptop.brand.site}</div>
                    <div>{laptop.model}</div>
                    <div>{laptop.year}</div>
                </section>

                <section className="laptopPic">
                    <img className="laptopPic__img" src={`${laptop.imageName}`} alt={`${laptop.model}`} />
                </section>

            </NavLink>
        )
    }
}

export default Laptop;