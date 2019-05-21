import React, { Component } from 'react';
import todoApi, { axiosInstance, messages } from '../../api/todo/todoApi';
import Todo from '../../components/Todo/Todo';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class TodoManager extends Component {
  state = {
    todo: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetchTodo();
  }

  fetchTodo = async () => {
    try {
      const response = await todoApi.fetchTodo();
      this.setState({ todo: response.data, loading: false, error: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  fetchInvalidTodo = async () => {
    try {
      const response = await todoApi.fetchInvalidTodo();
      this.setState({ todo: response.data, loading: false, error: false });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };

  handleClick = () => {
    this.setState({ loading: true });
    if (this.state.error) {
      this.fetchTodo();
    } else {
      this.fetchInvalidTodo();
    }
  };

  render() {
    const { todo, loading, error } = this.state;
    return (
      <>
        <Button clicked={this.handleClick} error={error} />
        {loading ? (
          <Spinner />
        ) : !error ? (
          <Todo title={todo.title} description={todo.description} />
        ) : null}
      </>
    );
  }
}

export default withErrorHandler(TodoManager, axiosInstance, messages);
