import React, {Component} from 'react';

import './phone.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


import history from '../../../../services/history'

class Phone extends Component {

    render() {

        const {phone} = this.props;
        const backgroundColor = "#F6F6F6";
        const brandName = phone.brand.name.replace(/ /g, "-");
        const model = phone.model.replace(/ /g, "-");

         return(
             <Card className="navp" style={{backgroundColor}} onClick={() => history.push(`phones/${brandName}/${model}`)} >

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
        )
    }
}

export default Phone;