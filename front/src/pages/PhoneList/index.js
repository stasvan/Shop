import React, {Component} from 'react';
import { getPhones } from "../../../../services/API/phone";

import Pagination from "material-ui-flat-pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import './phoneList.scss';
import Phone from '../../../Phone'
import CircularProgress from "@material-ui/core/CircularProgress";


const theme = createMuiTheme();

class PhoneList extends Component{

    state = {
        isLoading: true,
        phones: [],
        phonesCount: 0,
        limit: 3,
        page: 0,
        offset: 0
    };

    constructor(props) {
        super(props);
        //this.updateEmail = this.updateEmail.bind(this);
        this.getPhonesPageLimit = this.getPhonesPageLimit.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
    }

    componentDidMount() {
        const {page, limit} = this.state;
        this.getPhonesPageLimit(page, limit);
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    async getPhonesPageLimit(page, limit){
        await getPhones(page, limit)
            .then(data => this.setState({
                phones: data.phones,
                phonesCount: data.phonesCount
            }));
        this.setState({isLoading: false})
    }

    handleClick(offset) {
        const {limit} = this.state;
        //console.log(offset);
        const page = offset / limit;
        this.setState({ page });
        this.setState({ offset });
        this.getPhonesPageLimit(page, limit);
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="phonesCircularProgress">
                    <CircularProgress />
                </div>
            )
        }
        const  {phones, limit, offset, phonesCount} = this.state;
        console.log(phonesCount);
        return(
            <div>
                <div className="phoneList">
                    {
                        phones.map(phone =>
                            <Phone key={phone.id} phone = {phone} />
                        )
                    }
                </div>
                <div className="phonePaging">
                    <Pagination
                        limit={limit}
                        offset={offset}
                        total={phonesCount}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </div>
            </div>
        )
    }

}

export default PhoneList;