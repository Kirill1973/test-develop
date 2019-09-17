import React, { Component } from 'react';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import Styles from './AddPanel.module.scss';
import { asyncActions } from '../../../engine/core/postsData/saga/asyncActions';

class AddPanel extends Component {
  inputValue = React.createRef();

  inputValue2 = React.createRef();

  state = {
    valuePar: '',
  };

  onSendPost = () => {
    const {
      current: { value: inputValueOne }
    } = this.inputValue;
    const {
      current: { value: inputValueTwo }
    } = this.inputValue2;
    const { onAddPostAsync } = this.props;
    if (inputValueOne.length === 0 || inputValueTwo.length === 0) {
      this.setState({ valuePar: 'вы не заполнили поля' });
    } else {
      const newObj = {
        title: inputValueOne,
        body: inputValueTwo,
        time: `${format(new Date(), 'HH:mm')}`,
        date: `${format(new Date(), 'dd:MM:yyyy')}`,
        comments: []
      };
      onAddPostAsync(newObj);
      this.setState({ valuePar: '' });
    }
  };

  render() {
    const { valuePar } = this.state;
    return (
      <div className={Styles.AddPanel}>
        <p className={Styles.AddPanel__Warning}>{valuePar}</p>
        <div className={Styles.AddPanel__Form}>
          <div className={Styles.AddPanel__Inputs}>
            <input
              ref={this.inputValue}
              type="text"
              className={Styles.AddPanel__Input}
              placeholder="укажите тему блога"
            />
            <input
              ref={this.inputValue2}
              type="text"
              className={Styles.AddPanel__Input}
              placeholder="укажите сообщение"
            />
          </div>
          <button type="button" onClick={this.onSendPost}>
            Добавить блог
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onAddPostAsync: asyncActions.onAddPostAsync,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddPanel);
