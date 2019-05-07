import React, {Component} from 'react';

import './phone.scss';
import {NavLink} from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from "@material-ui/core/ButtonBase";

import history from '../../../../services/history'

class Phone extends Component {

    render() {

        const {phone} = this.props;
        const backgroundColor = "#EDEDED";

         return(
             <div onClick={() => history.push(`phones/${phone.id}`)} >
             <Card className="navp" style={{backgroundColor}}>

            {/*<NavLink className="navp" to={`phones/${phone.id}`}  style={{ textDecoration: 'none' }} >*/}
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
                {/*<Card className={styles.card}>*/}
                {/*    <CardActionArea>*/}
                {/*        <CardMedia*/}
                {/*            className={styles.media}*/}
                {/*            image="/static/images/cards/contemplative-reptile.jpg"*/}
                {/*            title="Contemplative Reptile"*/}
                {/*        />*/}
                {/*        <CardContent>*/}
                {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                {/*                Lizard*/}
                {/*            </Typography>*/}
                {/*            <Typography component="p">*/}
                {/*                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
                {/*                across all continents except Antarctica*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </CardActionArea>*/}
                {/*    <CardActions>*/}
                {/*        <Button size="small" color="primary">*/}
                {/*            Share*/}
                {/*        </Button>*/}
                {/*        <Button size="small" color="primary">*/}
                {/*            Learn More*/}
                {/*        </Button>*/}
                {/*    </CardActions>*/}
                {/*</Card>*/}
            {/*</NavLink>*/}
            </Card>
             </div>
        )
    }
}

export default Phone;