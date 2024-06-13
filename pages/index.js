import { useArtPieces } from "../contexts/ArtPiecesContext";
import SpotlightPiece from "../components/SpotlightPiece";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  margin-top: 0;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 10px;
`;

const SpotlightPage = () => {
  const { artPieces, error } = useArtPieces();

  if (error) return <div>Error loading art pieces.</div>;
  if (!artPieces.length) return <div>Loading...</div>;

  const randomIndex = Math.floor(Math.random() * artPieces.length);
  const spotlightPiece = artPieces[randomIndex];

  return (
    <PageContainer>
      <StyledH1>Spotlight Piece</StyledH1>
      <SpotlightPiece piece={spotlightPiece} />
    </PageContainer>
  );
};

export default SpotlightPage;
