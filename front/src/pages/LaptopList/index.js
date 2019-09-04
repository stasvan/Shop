import React, {Component} from 'react';
import { getLaptops } from "../../services/API/laptop";

import Pagination from "material-ui-flat-pagination/lib/index";

import './laptopList.scss';

import Laptop from '../../components/Laptop'
import CircularProgress from "@material-ui/core/CircularProgress";
import {showTextErrorToast} from "../../utils/utils";
import TextField from "@material-ui/core/TextField";

class LaptopList extends Component{

    state = {
        isLoading: true,
        laptops: [],
        laptopsCount: 0,
        limit: 4,
        page: 0,
        offset: 0,
        search: ""
    };

    constructor(props) {
        super(props);
        //this.updateEmail = this.updateEmail.bind(this);
        this.getLaptopsPageLimit = this.getLaptopsPageLimit.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        const {page, limit, search} = this.state;
        this.getLaptopsPageLimit(search, page, limit);
    }


    updateLoading(state) {
        this.setState({isLoading: state});
    }

    async getLaptopsPageLimit(search, page, limit){
        await getLaptops(search, page, limit)
            .then(data => this.setState({
                laptops: data.laptops,
                laptopsCount: data.laptopsCount
            }))
            .catch(function() {
                showTextErrorToast("Error");
            });

        this.setState({isLoading: false})
    }

    handleClick(offset) {
        const {limit, search} = this.state;
        const page = offset / limit;
        this.setState({ page });
        this.setState({ offset });
        this.getLaptopsPageLimit(search, page, limit);
    }

    handleSearchChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })

        const {page, limit} = this.state;
        this.getLaptopsPageLimit(event.target.value, page, limit);
    };

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="laptopsCircularProgress">
                    <CircularProgress />
                </div>
            )
        }
        const  {laptops, limit, offset, laptopsCount} = this.state;
        console.log(laptopsCount)
        return(
            <div>
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    onChange={this.handleSearchChange("search")}
                />
                <div className="laptopList">
                    {
                        laptops.map(laptop =>
                            <Laptop key={laptop.id} laptop = {laptop} />
                        )
                    }
                </div>
                <div className="laptopPaging">
                    <Pagination
                        limit={limit}
                        offset={offset}
                        total={laptopsCount}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </div>
            </div>
        )
    }
}

export default LaptopList;