import PostList from "../../Components/PostList/PostList";

const PostListPage = ({ postList }) => {
  return (
    <>
      <PostList postList={postList} type="ssg" />
    </>
  );
};

export async function getStaticProps() {
  let postList = await fetch("https://jsonplaceholder.typicode.com/posts");
  postList = await postList.json();

  return {
    props: { postList },
  };
}

export default PostListPage;
