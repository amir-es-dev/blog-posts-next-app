import Post from "../../../Components/Post/Post";

const Postpage = (props) => {
  return (
    <>
      <Post postData={props} type="ssg" />
    </>
  );
};

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const { postId } = params;

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

export async function getStaticPaths() {
  let postList = await fetch("https://jsonplaceholder.typicode.com/posts");
  postList = await postList.json();

  const postIdArr = [];
  for (let post of postList) {
    let postId = String(post.id);
    if (!postIdArr.includes(postId)) {
      postIdArr.push(postId);
    }
  }

  return {
    paths: postIdArr.map((el) => ({
      params: { postId: el },
    })),
    fallback: false,

    //OR
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2"} },
    // ],
    // fallback: "blocking",
  };
}

export default Postpage;
