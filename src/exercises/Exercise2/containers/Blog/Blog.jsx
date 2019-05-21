import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import styles from './Blog.module.scss';
import jsonplaceholderApi from '../../api/jsonplaceholderApi';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: ''
  };

  componentDidMount() {
    this.fetchBlogs();
    this.fetchFailed();
  }

  fetchBlogs = async () => {
    try {
      const response = await jsonplaceholderApi.fetchPosts();
      console.log('[Blog.jsx] Posts response: ', response);
      const posts = response.data.slice(0, 4).map(post => ({ ...post, author: `Manh` }));

      this.setState({ posts });
    } catch (err) {
      console.log(err);
    }
  };

  fetchFailed = async () => {
    try {
      await jsonplaceholderApi.fetchPostsFailed();
    } catch (err) {
      console.log(err);
    }
  };

  handlePostSelected = selectedPostId => {
    this.setState({ selectedPostId });
  };

  handleCancelSelectedId = () => {
    this.setState({ selectedPostId: '' });
  };

  render() {
    const posts = this.state.posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.handlePostSelected(post.id)}
      />
    ));

    return (
      <div>
        <section className={styles.Posts}>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} canceled={this.handleCancelSelectedId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
