import Image from "next/image";
import styled from "styled-components";

const SpotlightContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const SpotlightTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SpotlightPiece = ({ piece }) => {
  return (
    <SpotlightContainer>
      <SpotlightTitle>Spotlight Piece</SpotlightTitle>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={300}
        height={300}
      />
      <h3>{piece.name}</h3>
      <p>By {piece.artist}</p>
    </SpotlightContainer>
  );
};

export default SpotlightPiece;
