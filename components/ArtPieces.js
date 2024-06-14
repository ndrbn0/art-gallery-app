import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const ArtPieces = ({ pieces = [] }) => {
  return (
    <GridContainer>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </GridContainer>
  );
};

export default ArtPieces;
