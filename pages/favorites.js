import { useArtPieces } from "../contexts/ArtPiecesContext";
import ArtPieces from "../components/ArtPieces";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  padding: 20px;
`;

const FavoritesPage = () => {
  const { artPieces, artPiecesInfo, error } = useArtPieces();

  if (!artPieces.length) return <div>Loading...</div>;

  const favoriteArtPieces = artPieces.filter((piece) =>
    artPiecesInfo.find((info) => info.slug === piece.slug && info.isFavorite)
  );

  return (
    <div>
      <StyledH1>Favorites</StyledH1>
      <ArtPieces pieces={favoriteArtPieces} />
    </div>
  );
};

export default FavoritesPage;
