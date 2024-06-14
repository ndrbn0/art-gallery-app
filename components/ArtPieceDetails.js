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
  max-width: 300px; // Fixed size
  height: 300px; // Fixed size
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
  text-decoration: none; // Remove underline
  font-weight: bold;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffa500;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: #ffc525;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
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
