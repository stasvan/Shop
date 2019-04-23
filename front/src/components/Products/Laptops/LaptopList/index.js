import React, {Component} from 'react';
import { getLaptops } from "../../../../services/API/laptop";

import Laptop from '../Laptop'

class LaptopList extends Component{

    state = {
        laptops: []
    };

    componentDidMount() {
        getLaptops()
            .then(data => this.setState({
                laptops: data
            }))
    }

    render() {
        const  {laptops} = this.state;
        return(
            <div>
                {
                    laptops.map(laptop =>
                        <Laptop key={laptop.id} laptop = {laptop} />
                    )
                }
            </div>
        )
    }

}

export default LaptopList;