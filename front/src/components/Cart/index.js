import React, {Component} from 'react';
import history from '../../services/history'

class Cart extends Component {

    componentDidMount() {
        return history.push('/signIn');
    }

    render() {

        // return history.push('/signIn');
        return(
            <div>
                <h1>Cart</h1>
            </div>

        );
    }
}

export default Cart;