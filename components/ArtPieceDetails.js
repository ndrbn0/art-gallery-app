import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

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
    object-fit: cover; /* Ensure the image covers the container */
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

const ArtPieceDetails = ({ image, title, artist, year, genre }) => {
  return (
    <DetailsContainer>
      <BackButton href="/art-pieces">← Back to Art Pieces</BackButton>
      <ImageWrapper>
        <Image src={image} alt={title} layout="fill" />
      </ImageWrapper>
      <h2>{title}</h2>
      <p>
        <strong>Artist:</strong> {artist}
      </p>
      <p>
        <strong>Year:</strong> {year}
      </p>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
    </DetailsContainer>
  );
};

export default ArtPieceDetails;
