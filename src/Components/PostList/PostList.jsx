import styles from "./PostList.module.css";

const PostList = ({ postList, type }) => {
  return (
    <div className={styles.container}>
      <h2>Posts</h2>
      <div className={styles.posts_box}>
        {postList.map((post) => (
          <a
            href={type === "ssr" ? `/ssr/${post.id}` : `/ssg/${post.id}`}
            key={post.id}
          >
            <div className={styles.post_box}>
              <h3>Title</h3>
              <p>{post.title}</p>
              <h3>Body</h3>
              <p>{post.body}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PostList;
