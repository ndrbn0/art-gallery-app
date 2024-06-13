import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-grid;
  gap: 10px;
  padding: 20px;
  margin: 30px;
`;

const ArtPiecePreview = ({ image, title, artist }) => {
  return (
    <StyledDiv>
      <Image src={image} alt={title} width={200} height={200} />
      <h2>{title}</h2>
      <p>By {artist}</p>
    </StyledDiv>
  );
};

export default ArtPiecePreview;
