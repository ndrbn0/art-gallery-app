import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledDiv = styled.div`
  gap: 10px;
  padding: 20px;
  margin: 20px; // Adjusted margin to make spacing more consistent
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 300px; // Fixed size
  height: 400px; // Fixed size

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 260px; // Fixed size
  height: 260px; // Fixed size
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ArtPiecePreview = ({ slug, image, title, artist }) => {
  return (
    <CustomLink href={`/art-pieces/${slug}`} passHref>
      <StyledDiv>
        <ImageWrapper>
          <Image
            src={image}
            alt={title}
            width={260}
            height={260}
            layout="responsive"
          />
        </ImageWrapper>
        <h2>{title}</h2>
        <p>By {artist}</p>
      </StyledDiv>
    </CustomLink>
  );
};

export default ArtPiecePreview;
