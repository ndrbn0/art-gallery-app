import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-grid;
  gap: 10px;
  padding: 20px;
  margin: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
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
