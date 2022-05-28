import styles from "./Comment.module.css";

const Comment = ({ commentObj }) => {
  return (
    <div className={styles.commnet_box}>
      <div className={styles.comment}>
        <p>{commentObj.body}</p>
        <div className={styles.info}>
          <span>Name: {commentObj.name}</span>
          <span> Email: {commentObj.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
