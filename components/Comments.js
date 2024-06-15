import styled from "styled-components";

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid #ccc;
`;

const CommentText = styled.p`
  margin-top: 5px;
`;

const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
`;
const StyledH3 = styled.h3`
  margin-top: 30px;
  text-align: center;
`;

const Comments = ({ comments }) => {
  // Check if comments is undefined or null
  if (!comments || !comments.length) {
    return <div>No comments yet.</div>;
  }

  return (
    <div>
      <CommentList>
        <StyledH3>Comments</StyledH3>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <CommentText>{comment.text}</CommentText>
            <CommentDate>{new Date(comment.date).toLocaleString()}</CommentDate>
          </CommentItem>
        ))}
      </CommentList>
    </div>
  );
};

export default Comments;
