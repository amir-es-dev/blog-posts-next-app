import Comment from "../../../Components/Comment/Comment";

const CommentPage = ({ commentObj }) => {
  return (
    <>
      <Comment commentObj={commentObj} />
    </>
  );
};

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const { commentId } = params;

  let commentObj = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`
  );
  commentObj = await commentObj.json();

  return {
    props: { commentObj },
  };
}

export async function getStaticPaths() {
  let commentList = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  commentList = await commentList.json();

  const pathArr = [];
  for (let comment of commentList) {
    const obj = { params: {} };
    const { params } = obj;
    params.postId = String(comment.postId);
    params.commentId = String(comment.id);
    pathArr.push(obj);
  }

  return {
    paths: pathArr,
    fallback: false,

    //OR
    // paths: [
    //   { params: { postId: "1", commentId: "1" } },
    //   { params: { postId: "1", commentId: "2" } },
    // ],
    // fallback: "blocking",
  };

  return {};
}

export default CommentPage;
