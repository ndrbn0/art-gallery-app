import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #e19093;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ffc525;
  }
`;

const CommentForm = ({ onSubmitComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      onSubmitComment(comment);
      setComment("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows="4"
        placeholder="Write your comment here..."
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default CommentForm;
