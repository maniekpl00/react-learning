import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const withErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      this.onInit();
    }

    onInit = () => {
      this.reqInterceptor = axiosInstance.interceptors.request.use(
        req => {
          this.setState({ error: null });
          return req;
        },
        error => this.handleError(error)
      );
      this.resInterceptor = axiosInstance.interceptors.response.use(
        res => res,
        error => this.handleError(error)
      );
    };

    componentWillUnmount() {
      axiosInstance.interceptors.request.eject(this.reqInterceptor);
      axiosInstance.interceptors.response.eject(this.resInterceptor);
    }

    handleError = error => {
      if (error.response) {
        toast.error("Login failed");
        this.setState({ error });
      } else {
        toast.error('Disconnected');
      }
      return Promise.reject(error);
    };

    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={2000} />
        </>
      );
    }
  };
};

export default withErrorHandler;
