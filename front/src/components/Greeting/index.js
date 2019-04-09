import React, {Component} from 'react';

class Greeting extends Component {


    render() {
        const {email} = this.props;
        return(
            <div>
                <h1>Hello, {email}!</h1>
            </div>

        );
    }
}

export default Greeting;