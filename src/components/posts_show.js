import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import Link from 'react-router-dom/Link';

@connect((state) => ({post: state.posts.post}), {fetchPost})
class PostsShow extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div></div>;
    }

    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostsShow;