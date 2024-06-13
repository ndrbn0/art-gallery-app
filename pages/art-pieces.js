import { useArtPieces } from "../contexts/ArtPiecesContext";
import ArtPieces from "../components/ArtPieces";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
`;

const ArtPiecesPage = () => {
  const { artPieces, error } = useArtPieces();

  if (error) return <div>Error loading art pieces.</div>;
  if (!artPieces || !artPieces.length) return <div>Loading...</div>;

  return (
    <div>
      <StyledH1>Art Gallery</StyledH1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
};

export default ArtPiecesPage;
