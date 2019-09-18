import React from 'react';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Styles from './RenderPostDetails.module.scss';

const RenderPostDetails = ({
  item,
  loading,
  valuePar,
  onAddComment,
  inputValue,
  editMessage,
  editThem,
  onEditThem,
  onEditMessage,
  messageTerm,
  themTerm,
  onChangeThem,
  onChangeMessage,
  onEditThemText,
  onEditMessageText,
  valueErrorThem,
  valueErrorMessage
}) => {
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
          {!editThem ? (
            <p>
              {item.title}{' '}
              <button
                className={Styles.PostDetails__EditButton}
                onClick={onEditThem}
                type="button"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </p>
          ) : (
            <>
              <input
                value={themTerm}
                onChange={onChangeThem}
                className={Styles.PostDetails__EditInput}
                type="text"
              />
              <button
                type="button"
                className={Styles.PostDetails__EditButtonText}
                onClick={onEditThemText}
              >
                Отредактировать
              </button>
              <p className={Styles.PostDetails__Warning}>{valueErrorThem}</p>
            </>
          )}
          <p>Сообщение:</p>
          {!editMessage ? (
            <p>
              {item.body}{' '}
              <button
                className={Styles.PostDetails__EditButton}
                onClick={onEditMessage}
                type="button"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </p>
          ) : (
            <>
              <input
                value={messageTerm}
                onChange={onChangeMessage}
                className={Styles.PostDetails__EditInput}
                type="text"
              />
              <button
                type="button"
                className={Styles.PostDetails__EditButtonText}
                onClick={onEditMessageText}
              >
                Отредактировать
              </button>
              <p className={Styles.PostDetails__Warning}>{valueErrorMessage}</p>
            </>
          )}
          <div>
            <input
              ref={inputValue}
              className={Styles.PostDetails__Input}
              type="text"
              placeholder="введите коментарий"
            />
            <button
              onClick={onAddComment}
              className={Styles.PostDetails__Button}
              type="button"
            >
              Добавить коментарий
            </button>
            <p className={Styles.PostDetails__Warning}>{valuePar}</p>
          </div>
          <div>
            <p>коментарии:</p>
            {item.comments.length > 0 ? (
              item.comments.map(comment => (
                <p key={comment.id}>{comment.body}</p>
              ))
            ) : (
              <p>коментариев нет</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderPostDetails;
