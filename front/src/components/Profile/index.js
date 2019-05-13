import React, {Component} from 'react';
import history from '../../services/history'

class Profile extends Component {

    componentDidMount() {
        const {email} = this.props;
        if (email === "none"){
            return history.push('/signIn');
        }
    }

    render() {

        return(
            <div>
                <h1>Profile</h1>
            </div>

        );
    }
}

export default Profile;