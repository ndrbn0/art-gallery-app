import Image from "next/image";
import styled from "styled-components";

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

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const ArtistName = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 15px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SpotlightPiece = ({ piece }) => {
  return (
    <div>
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
      </SpotlightContainer>
    </div>
  );
};

export default SpotlightPiece;