import React, {Component} from 'react';
import { getLaptops } from "../../../../services/API/laptop";

import Laptop from '../../../Laptop'

class LaptopList extends Component{

    state = {
        laptops: [],
        limit: 5,
        page: 0
    };

    componentDidMount() {
        const {page, limit} = this.state;
        getLaptops(page, limit)
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