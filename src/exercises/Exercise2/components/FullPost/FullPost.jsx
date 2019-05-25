import React, { Component } from 'react';

import styles from './FullPost.module.scss';
import jsonplaceholderApi from '../../api/jsonplaceholderApi';
import Spinner from '../../../../components/Spinner/Spinner';

class FullPost extends Component {
  state = {
    post: null,
    postLoaded: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id && prevProps.id !== this.props.id) {
      if (prevState.postLoaded) {
        this.setState({ postLoaded: false });
      }
      this.fetchPost();
    }
  }

  fetchPost = async () => {
    try {
      const response = await jsonplaceholderApi.fetchPostById(this.props.id);
      // debugger;
      await setTimeout(() => this.setState({ post: response.data, postLoaded: true }), 1000);
    } catch (err) {
      console.log(err);
    }
  };

  handleDeletePost = async () => {
    try {
      const response = await jsonplaceholderApi.deletePostById(this.props.id);
      this.setState({
        post: null,
        postLoaded: false
      });
      this.props.canceled();
      console.log('[FullPost.jsx] DELETE response: ', response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = this.state.postLoaded ? (
        <div className={styles.FullPost}>
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className={styles.Edit}>
            <button className={styles.Delete} onClick={this.handleDeletePost}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <Spinner style={{ margin: '0 auto' }} />
      );
    }

    return post;
  }
}

export default FullPost;
