import React, { Component } from 'react';
import authApi, { axiosIns } from '../../api/authApi';
import { withRouter } from 'react-router-dom';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import LoginForm from '../../components/LoginForm/LoginForm';

class AuthHandler extends Component {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // Fake POST to check login
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    try {
      await authApi.login(data);
      this.props.history.push(`${this.props.match.path}/12345`);
      // this.props.history.replace('/')
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <LoginForm
          email={email}
          password={password}
          changed={this.handleChange}
          submitted={this.handleSubmit}
        />
      </>
    );
  }
}

export default withRouter(withErrorHandler(AuthHandler, axiosIns));
