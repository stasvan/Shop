import React, {Component} from 'react';

import './laptop.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


import history from '../../../../services/history'

class Laptop extends Component {

    render() {

        const {laptop} = this.props;
        const backgroundColor = "#F6F6F6";
        const brandName = laptop.brand.name.replace(/ /g, "-");
        const model = laptop.model.replace(/ /g, "-");

        return(
            <Card className="navl" style={{backgroundColor}} onClick={() => history.push(`laptops/${brandName}/${model}`)} >

                <CardActionArea>
                    <section className="lchr">
                        <div>{laptop.brand.name}</div>
                        <div>{laptop.model}</div>
                        <div>{laptop.year}</div>
                        <div>{laptop.cpu}</div>
                    </section>

                    <section className="laptopPic">
                        <img className="laptopPic__img" src={`${laptop.imageName}`} alt={`${laptop.model}`} />
                    </section>
                </CardActionArea>
            </Card>
        )
    }
}

export default Laptop;