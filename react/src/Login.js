import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        // update the component state with a change to either the username or password.
    };

    onSubmit = e => {
        e.preventDefault();

        // calls the passed callback from the parent <App> component.
        this.props.onLogin(e.target.username.value, e.target.password.value);
    }

    render() {
        // render a login form and perform manual validation.
        const validForm = this.state.username && this.state.password.length >= 8;
        return (
            <div class="container">

                <form onSubmit={this.onSubmit}>
                    <input placeholder="username" id="username" name="username" class="form-control" required onChange={this.onChange} />
                    <input placeholder="password" id="password" name="password" class="form-control" type="password" required minlength="8" onChange={this.onChange} />
                    <button disabled={!validForm} type="submit">Log In</button>
                </form>
                <button type="submit">Test API</button>
                <button>Logout</button>
            </div>


        )
    }
};

export default Login;