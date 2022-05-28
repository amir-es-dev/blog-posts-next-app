import Post from "../../../Components/Post/Post";

const Postpage = (props) => {
  return (
    <>
      <Post postData={props} type="ssr" />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { postId } = query;

  let postContent = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  postContent = await postContent.json();

  let postComments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  postComments = await postComments.json();

  return {
    props: { postContent, postComments },
    notFound: !postContent.id,
  };
}

export default Postpage;
