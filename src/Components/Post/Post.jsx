import styles from "./Post.module.css";

const Post = ({ postData, type }) => {
  const { postContent, postComments } = postData;
  return (
    <div className={styles.post}>
      <div className={styles.post_content}>
        <h3>Title</h3>
        <p>{postContent.title}</p>
        <h3>Body</h3>
        <p>{postContent.body}</p>
      </div>
      <div className={styles.comments_box}>
        <h2>Comments</h2>
        {postComments.map((comment) => (
          <a
            href={
              type === "ssr"
                ? `/ssr/${comment.postId}/${comment.id}`
                : `/ssg/${comment.postId}/${comment.id}`
            }
            key={comment.id}
          >
            <div className={styles.comment}>
              <p>{comment.body}</p>
              <div className={styles.info}>
                <span>Name: {comment.name}</span>
                <span> Email: {comment.email}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Post;
