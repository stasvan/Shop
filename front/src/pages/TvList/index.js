import React, {Component} from 'react';
import { getTvs } from "../../services/API/tv";

import Pagination from "material-ui-flat-pagination/lib/index";

import './tvList.scss';

import Tv from '../../components/Tv'
import CircularProgress from "@material-ui/core/CircularProgress";
import {showTextErrorToast} from "../../utils/utils";

class TvList extends Component{

    state = {
        isLoading: true,
        tvs: [],
        tvsCount: 0,
        limit: 4,
        page: 0,
        offset: 0
    };

    constructor(props) {
        super(props);
        //this.updateEmail = this.updateEmail.bind(this);
        this.getTvsPageLimit = this.getTvsPageLimit.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
    }

    componentDidMount() {
        const {page, limit} = this.state;
        this.getTvsPageLimit(page, limit);
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    async getTvsPageLimit(page, limit){
        await getTvs(page, limit)
            .then(data => this.setState({
                tvs: data.tvs,
                tvsCount: data.tvsCount
            }))
            .catch(function() {
                showTextErrorToast("Error");
            });
        this.setState({isLoading: false})
    }

    handleClick(offset) {
        const {limit} = this.state;
        //console.log(offset);
        const page = offset / limit;
        this.setState({ page });
        this.setState({ offset });
        this.getTvsPageLimit(page, limit);
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="tvsCircularProgress">
                    <CircularProgress />
                </div>
            )
        }
        const  {tvs, limit, offset, tvsCount} = this.state;
        return(
            <div>
                <div className="tvList">
                    {
                        tvs.map(tv =>
                            <Tv key={tv.id} tv = {tv} />
                        )
                    }
                </div>
                <div className="tvPaging">
                    <Pagination
                        limit={limit}
                        offset={offset}
                        total={tvsCount}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </div>
            </div>
        )
    }

}

export default TvList;