import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './MessageBox.module.scss';

const MessageBox = ({ item, deletePost }) => {
  return (
    <div className={Styles.MessageBox}>
      <p>{item.title}</p>
      <p>{item.body}</p>
      <div className={Styles.MessageBox__Info}>
        <Link
          to={`/posts/${item.id}`}
          className={Styles.MessageBox__Link}
          href="#"
        >
          Показать подробнее
        </Link>
        <button
          type="button"
          onClick={() => deletePost(item.id)}
          className={Styles.MessageBox__Delete}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
