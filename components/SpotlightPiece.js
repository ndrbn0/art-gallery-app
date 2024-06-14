import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { useArtPieces } from "../contexts/ArtPiecesContext";

const SpotlightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
  max-width: 500px;
  height: 500px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ArtistName = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 15px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SpotlightPiece = ({ piece }) => {
  const { artPiecesInfo, toggleFavorite } = useArtPieces();
  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === piece.slug
  )?.isFavorite;

  return (
    <SpotlightContainer>
      <ImageWrapper>
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={400}
          height={400}
          layout="responsive"
        />
      </ImageWrapper>
      <h3>{piece.name}</h3>
      <ArtistName>By {piece.artist}</ArtistName>
      <FavoriteButton
        isFavorite={isFavorite}
        toggleFavorite={() => toggleFavorite(piece.slug)} // Pass the handler function
      />
    </SpotlightContainer>
  );
};

export default SpotlightPiece;
