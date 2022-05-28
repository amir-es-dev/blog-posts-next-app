import PostList from "../../Components/PostList/PostList";

const PostListPage = ({ postList }) => {
  return (
    <>
      <PostList postList={postList} type="ssr" />
    </>
  );
};

export async function getServerSideProps() {
  let postList = await fetch("https://jsonplaceholder.typicode.com/posts");
  postList = await postList.json();

  return {
    props: { postList },
  };
}

export default PostListPage;
