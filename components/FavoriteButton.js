import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.$isFavorite ? "#ffcccc" : "#ccc")};
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: auto;

  &:hover {
    background: ${(props) => (props.$isFavorite ? "#ff9999" : "#bbb")};
  }
`;

const FavoriteButton = ({ isFavorite, toggleFavorite }) => {
  return (
    <Button $isFavorite={isFavorite} onClick={toggleFavorite}>
      {isFavorite ? "Favorite" : "Favorite"}
    </Button>
  );
};

export default FavoriteButton;
