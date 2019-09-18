import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActions } from '../../../engine/core/postsData/saga/asyncActions';
import AddPanel from '../AddPanel/AddPanel';
import Spinner from '../Spinner/Spinner';
import MessageBox from '../MessageBox/MessageBox';
import Styles from './RenderPosts.module.scss';

class RenderPosts extends Component {
  componentDidMount() {
    const { onGetPosts } = this.props;
    onGetPosts();
  }

  render() {
    const { posts, loading, deletePost } = this.props;
    return (
      <div className={Styles.RenderPosts}>
        <div className={Styles.RenderPosts__Messages}>
          {loading === true ? (
            <div className={Styles.RenderPosts__Loader}>
              <Spinner />
            </div>
          ) : (
            posts.map(item => (
              <MessageBox key={item.id} item={item} deletePost={deletePost} />
            ))
          )}
        </div>
        <AddPanel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsReducer.get('posts'),
  loading: state.postsReducer.get('loading'),
});

const mapDispatchToProps = {
  onGetPosts: asyncActions.onGetDataAsyncPosts,
  deletePost: asyncActions.onDeletePostAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderPosts);
