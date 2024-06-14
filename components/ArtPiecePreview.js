import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { useArtPieces } from "@/contexts/ArtPiecesContext";

const StyledContainer = styled.div`
  width: 300px;
  height: 380px;
  margin: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* Ensure the image doesn't overflow the container */
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: calc(100% - 20px); /* Subtract the padding */
  height: 60%;
  padding: 10px; /* Add padding around the image */
  box-sizing: border-box; /* Include padding in the width and height */
  position: relative;
  border-radius: 10px; /* Match the border-radius to the container */
  overflow: hidden; /* Ensure the image doesn't overflow the container */
`;

const StyledContent = styled.div`
  padding: 10px;
  text-align: center;
  width: 100%; /* Ensure the content takes the full width */
`;

const Title = styled.h2`
  margin: 5px 0;
  color: #e19093;
  font-weight: bold;
  font-size: 16px;
`;

const Artist = styled.p`
  margin: 5px 0;
  color: #555;
  font-size: 14px;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;

const FavoriteButtonWrapper = styled.div`
  margin-bottom: 10px;
`;

const ArtPiecePreview = ({ slug, image, title, artist }) => {
  const { toggleFavorite, artPiecesInfo } = useArtPieces();

  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  )?.isFavorite;

  return (
    <StyledContainer>
      <CustomLink href={`/art-pieces/${slug}`}>
        <ImageWrapper>
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </ImageWrapper>
        <StyledContent>
          <Title>{title}</Title>
          <Artist>By {artist}</Artist>
        </StyledContent>
      </CustomLink>
      <FavoriteButtonWrapper>
        <FavoriteButton
          isFavorite={isFavorite}
          toggleFavorite={() => toggleFavorite(slug)}
        />
      </FavoriteButtonWrapper>
    </StyledContainer>
  );
};

export default ArtPiecePreview;
