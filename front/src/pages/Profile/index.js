import React, {Component} from 'react';
import history from '../../services/history'
import {validateToken} from "../../services/API/token";
import {parseJwt, showTextErrorToast} from "../../utils/utils";
import CircularProgress from "@material-ui/core/CircularProgress";

class Profile extends Component {

    state = {
        isLoading: true

    };

    constructor(props) {
        super(props);
        this.updateLoading = this.updateLoading.bind(this);
    }

    componentDidMount() {
        const updateLoading = this.updateLoading;
        const {updateRole} = this.props;
        const token = localStorage.getItem("user-jwt");
        if (token == null) {
            history.push('/sign-in');
        } else {
            validateToken(token)
                .then(function (message) {
                    if (message === "valid") {
                        const data = parseJwt(token);
                        console.log(data);
                    } else {
                        updateRole("none");
                        showTextErrorToast("Error");
                        localStorage.removeItem("user-jwt");
                        history.push('/sign-in');
                    }
                })
                .catch(function() {
                    updateRole("none");
                    showTextErrorToast("Error");
                    localStorage.removeItem("user-jwt");
                    history.push('/sign-in');
                });
            updateLoading(false);
        }

    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return (
                <div className="profileCircularProgress">
                    <CircularProgress />
                </div>
            )
        }
        return(
            <div>
                <h1>Profile</h1>
            </div>

        );
    }
}

export default Profile;