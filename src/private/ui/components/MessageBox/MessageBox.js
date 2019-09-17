import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './MessageBox.module.scss';

const MessageBox = ({ item, deletePost }) => {
  return (
    <div className={Styles.MessageBox}>
      <div className={Styles.MessageBox__Features}>
        <p>({item.comments.length}) комментариев</p>
        <button
          type="button"
          onClick={() => deletePost(item.id)}
          className={Styles.MessageBox__Delete}
        >
          Удалить
        </button>
      </div>
      <p>{item.body}</p>
      <div className={Styles.MessageBox__Info}>
        <p>{item.date}</p>
        <Link
          to={`/posts/${item.id}`}
          className={Styles.MessageBox__Link}
          href="#"
        >
          Показать подробнее
        </Link>
        <p>{item.time}</p>
      </div>
    </div>
  );
};

export default MessageBox;
