import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { useArtPieces } from "../contexts/ArtPiecesContext";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1 / 1;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BackButton = styled(Link)`
  align-self: flex-start;
  margin-bottom: 20px;
  color: #e19093;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc525;
  }
`;

const ArtPieceDetails = ({ image, title, artist, year, genre, slug }) => {
  const { artPiecesInfo, toggleFavorite } = useArtPieces();
  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  )?.isFavorite;

  console.log("API ArtPieceDetails: ", artPiecesInfo, isFavorite);

  return (
    <DetailsContainer>
      <BackButton href="/art-pieces">← Back to Art Pieces</BackButton>
      <ImageWrapper>
        <Image src={image} alt={title} layout="fill" />
      </ImageWrapper>
      <h2>{title}</h2>
      <p>By {artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        toggleFavorite={() => toggleFavorite(slug)}
      />
    </DetailsContainer>
  );
};

export default ArtPieceDetails;
