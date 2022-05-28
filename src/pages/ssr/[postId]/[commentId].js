import Comment from "../../../Components/Comment/Comment";

const CommentPage = ({ commentObj }) => {
  return (
    <>
      <Comment commentObj={commentObj} />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { commentId } = query;

  let commentObj = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${commentId}`
  );
  commentObj = await commentObj.json();

  return {
    props: { commentObj },
  };
}

export default CommentPage;
