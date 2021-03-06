import React, { Component } from 'react';

import styles from './NewPost.module.scss';
import jsonplaceholderApi from '../../api/jsonplaceholderApi';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Manh'
  };

  handlePostData = async () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    try {
      const response = await jsonplaceholderApi.savePost(data);
      console.log('[NewPost.jsx] POST response: ', response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className={styles.NewPost}>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Manh">Manh</option>
          <option value="Patka">Patka</option>
        </select>
        <button onClick={this.handlePostData}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
