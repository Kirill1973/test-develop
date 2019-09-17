import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActions } from '../../../engine/core/postData/saga/asyncActions';
import Loader from 'react-loader-spinner';
import Styles from './PostDetails.module.scss';

class PostDetails extends Component {
	inputValue = React.createRef();

	state = {
		valuePar: '',
	};

	componentDidMount() {
		const { getDataPost, id } = this.props;
		getDataPost(id);
	}

	onAddComment = () => {
		const { current: { value } } = this.inputValue;
		const { updatePost, id, item } = this.props;
		if (value.length > 0) {
			const comment = {
				id: item.comments.length === 0 ? 1 : item.comments[item.comments.length - 1].id + 1,
				postId: id,
				body: value
			};
			const newObj = {
				title: item.title,
				body: item.body,
				time: item.time,
				date: item.date,
				comments: [comment, ...item.comments]
			};
			updatePost(id, newObj);
			this.setState({valuePar: ''})
		} else {
			this.setState({valuePar: 'введите комментарий'})
		}
	};

	render() {
		const { loading, item } = this.props;
		const { valuePar } = this.state;
		return (
			<div className={Styles.PostDetails}>
				{loading === true ? (
					<div className={Styles.PostDetails__Loader}>
						<Loader
							type="Puff"
							color="#00BFFF"
							height={100}
							width={100}
							timeout={3000}
						/>
					</div>
				) : (
					<div className={Styles.PostDetails__Info}>
						<div className={Styles.PostDetails__Time}>
							<p>{item.date}</p>
							<p>{item.time}</p>
						</div>
						<p>Тема:</p>
						<p>{item.title}</p>
						<p>Сообщение:</p>
						<p>{item.body}</p>
						<div>
							<input ref={this.inputValue} className={Styles.PostDetails__Input} type="text" placeholder="введите коментарий"/>
							<button onClick={this.onAddComment} className={Styles.PostDetails__Button} type="button">Добавить коментарий</button>
							<p>{valuePar}</p>
						</div>
						<div>
							<p>коментарии :</p>
							{
								item.comments.length > 0 ?
								item.comments.map(item => <p key={item.id}>{item.body}</p>) :
								<p>коментариев нет</p>
							}
						</div>
					</div>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	id: Number(ownProps.match.params.id),
	item: state.postDataReducer.get('item'),
	loading: state.postDataReducer.get('loading'),
});

const mapDispatchToProps = {
	getDataPost: asyncActions.onGetPostAsync,
	updatePost: asyncActions.onUpdatePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);