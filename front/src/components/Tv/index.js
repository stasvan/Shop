import React, {Component} from 'react';

import './tv.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


import history from '../../services/history'

class Tv extends Component {

    render() {

        const {tv} = this.props;
        const backgroundColor = "#F6F6F6";
        const brandName = tv.brand.name.replace(/ /g, "-");
        const model = tv.model.replace(/ /g, "-");

         return(
             <Card className="navt" style={{backgroundColor}} onClick={() => history.push(`tvs/${brandName}/${model}`)} >
                 <CardActionArea>
                     <section className="tchr">
                         <div>{tv.brand.name}</div>
                         <div>{tv.model}</div>
                         <div>{tv.year}</div>
                         <div>{tv.resolution}</div>
                         <div>{tv.diagonal}</div>
                     </section>

                     <section className="tvPic">
                         <img className="tvPic__img" src={`${tv.imageName}`} alt={`${tv.model}`} />
                     </section>
                 </CardActionArea>
             </Card>

        )
    }
}

export default Tv;