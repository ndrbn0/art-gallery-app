import styled from "styled-components";

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const CommentText = styled.p`
  margin: 5px 0;
`;

const CommentDate = styled.span`
  font-size: 12px;
  color: #999;
`;

const Comments = ({ comments }) => {
  return (
    <div>
      <h3>Comments</h3>
      <CommentList>
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
