import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from "react-router-dom";

import './Login.css';

class Login extends Component {
    state = {
        value: null,
    };

    handleSubmit = () => {
        const { value } = this.state;

        if (value) {
            window.localStorage.setItem('fi-user', value);
            window.localStorage.setItem('fi-time', moment());
            this.props.history.push('/');
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    render() {
        const { text } = this.state;

        return (
            <div className="login">
                <input type="text" className="login__input" placeholder="Type your username..." value={text} onChange={this.handleChange} />
                <div className="login__button" onClick={this.handleSubmit}>Join the DoorDash Chat!</div>
            </div>
        );
    }
}

export { Login as LoginComponent };
export default withRouter(Login);
