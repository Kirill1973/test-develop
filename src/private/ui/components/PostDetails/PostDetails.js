import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActions } from '../../../engine/core/postData/saga/asyncActions';
import RenderPostDetails from '../../components/RenderPostDetails/RenderPostDetails';

class PostDetails extends Component {
  inputValue = React.createRef();

  state = {
    valuePar: '',
    editThem: false,
    editMessage: false,
    themTerm: '',
    messageTerm: '',
    valueErrorThem: '',
    valueErrorMessage: ''
  };

  componentDidMount() {
    const { getDataPost, id } = this.props;
    getDataPost(id);
  }

  onEditThem = () => {
    const { item } = this.props;
    this.setState({ editThem: true, themTerm: item.title });
  };

  onEditMessage = () => {
    const { item } = this.props;
    this.setState({ editMessage: true, messageTerm: item.body });
  };

  onChangeThem = event => {
    this.setState({ themTerm: event.target.value });
  };

  onChangeMessage = event => {
    this.setState({ messageTerm: event.target.value });
  };

  onAddComment = () => {
    const {
      current: { value }
    } = this.inputValue;
    const { addComment, id } = this.props;
    if (value.length > 0) {
      const comment = {
        postId: id,
        body: value
      };
      addComment(id, comment);
      this.setState({ valuePar: '' });
      this.inputValue.current.value = '';
    } else {
      this.setState({ valuePar: 'введите комментарий' });
    }
  };

  onEditThemText = () => {
    const { themTerm } = this.state;
    const { updatePost, id, item } = this.props;
    if (themTerm === item.title) {
      this.setState({ editThem: false });
      return;
    }
    if (themTerm.length === 0) {
      this.setState({ valueErrorThem: 'введите данные' });
    } else {
      const newObj = {
        title: themTerm,
        body: item.body,
      };
      updatePost(id, newObj);
      this.setState({ editThem: false });
      this.setState({ valueErrorThem: '' });
    }
  };

  onEditMessageText = () => {
    const { messageTerm } = this.state;
    const { updatePost, id, item } = this.props;
    if (messageTerm === item.body) {
      this.setState({ editMessage: false });
      return;
    }
    if (messageTerm.length === 0) {
      this.setState({ valueErrorMessage: 'введите данные' });
    } else {
      const newObj = {
        title: item.title,
        body: messageTerm,
      };
      updatePost(id, newObj);
      this.setState({ editMessage: false });
      this.setState({ valueErrorMessage: '' });
    }
  };

  render() {
    const { loading, item } = this.props;
    const {
      valuePar,
      editMessage,
      editThem,
      messageTerm,
      themTerm,
      valueErrorThem,
      valueErrorMessage
    } = this.state;
    return (
      <RenderPostDetails
        loading={loading}
        item={item}
        valuePar={valuePar}
        inputValue={this.inputValue}
        onAddComment={this.onAddComment}
        editMessage={editMessage}
        editThem={editThem}
        onEditThem={this.onEditThem}
        onEditMessage={this.onEditMessage}
        messageTerm={messageTerm}
        themTerm={themTerm}
        onChangeThem={this.onChangeThem}
        onChangeMessage={this.onChangeMessage}
        onEditThemText={this.onEditThemText}
        onEditMessageText={this.onEditMessageText}
        valueErrorThem={valueErrorThem}
        valueErrorMessage={valueErrorMessage}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: Number(ownProps.match.params.id),
  item: state.postDataReducer.get('item'),
  loading: state.postDataReducer.get('loading')
});

const mapDispatchToProps = {
  getDataPost: asyncActions.onGetPostAsync,
  updatePost: asyncActions.onUpdatePost,
  addComment: asyncActions.onAddComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
