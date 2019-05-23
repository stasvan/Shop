import React, {Component} from 'react';
import history from '../../services/history'
import {validateToken} from "../../services/API/token";
import {parseJwt} from "../../utils/utils";
import {toast} from "react-toastify";

class Profile extends Component {

    state = {
        email: "none",
        isLoading: true

    };

    constructor(props) {
        super(props);
        this.updateStateEmail = this.updateStateEmail.bind(this);
        this.updateLoading = this.updateLoading.bind(this);
    }

    updateStateEmail(data) {
        this.setState({email: data});
    }

    componentDidMount() {
        const updateStateEmail = this.updateStateEmail;
        const updateLoading = this.updateLoading;
        const {updateRole} = this.props;
        const token = localStorage.getItem("user-jwt");
        if (token == null) {
            history.push('/sign-in');
        } else {
            validateToken(token).then(function (message) {
                console.log(message);
                if (message === "valid") {
                    const data = parseJwt(token);
                    updateStateEmail(data.email);
                    console.log(data);
                } else {
                    updateRole("none");
                    updateStateEmail("none");
                    toast("Bad token, sign in");
                    localStorage.removeItem("user-jwt");
                    history.push('/sign-in');
                }
                updateLoading(false);
            });
        }
    }

    updateLoading(state) {
        this.setState({isLoading: state});
    }

    render() {
        const {isLoading} = this.state;
        if (isLoading){
            return '';
        }
        return(
            <div>
                <h1>Profile</h1>
            </div>

        );
    }
}

export default Profile;