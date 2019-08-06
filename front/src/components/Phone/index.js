import React, {Component} from 'react';

import './phone.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


import history from '../../services/history'

class Phone extends Component {

    render() {

        const {phone} = this.props;
        const backgroundColor = "#F6F6F6";
        const brandName = phone.brand.name.replace(/ /g, "-");
        const model = phone.model.replace(/ /g, "-");

         return(
             <Card className="navp" style={{backgroundColor}} onClick={() => history.push(`phones/${brandName}/${model}`)} >
                 <CardActionArea>
                     <section className="pchr">
                         <div>{phone.brand.name}</div>
                         <div>{phone.model}</div>
                         <div>{phone.year}</div>
                         <div>{phone.cpu}</div>
                     </section>

                     <section className="phonePic">
                         <img className="phonePic__img" src={`${phone.imageName}`} alt={`${phone.model}`} />
                     </section>
                 </CardActionArea>
             </Card>

        )
    }
}

export default Phone;