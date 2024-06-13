import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const StyledDiv2 = styled.div`
  display: flex;
  min-width: 320px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 15px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const ArtPieces = ({ pieces }) => {
  return (
    <StyledDiv2>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </StyledDiv2>
  );
};

export default ArtPieces;
