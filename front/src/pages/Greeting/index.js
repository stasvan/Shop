import React, {Component} from 'react';

import './greeting.scss'

class Greeting extends Component {

    render() {
        return(
            <div>
                <div>
                    <h4 className="greeting">Hello</h4>
                    <h2 className="greeting">this</h2>
                    <h2 className="greeting">is</h2>
                    <h2 className="greeting">Main</h2>
                    <h1 className="greeting">page!</h1>
                </div>
            </div>
        );
    }
}

export default Greeting;