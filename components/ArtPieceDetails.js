import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import { useArtPieces } from "../contexts/ArtPiecesContext";

const ColorSwatch = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  display: flex;
`;

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

const ArtPieceDetails = ({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  colors,
}) => {
  const { artPiecesInfo, addComment } = useArtPieces();
  const artPieceInfo = artPiecesInfo.find((artPiece) => artPiece.slug === slug);
  const comments = artPieceInfo?.comments || [];

  const handleAddComment = (commentText) => {
    addComment(slug, { text: commentText, date: new Date().toISOString() });
  };

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
      <FavoriteButton slug={slug} />
      <h3>Color Palette</h3>
      <div>
        {colors.map((color, index) => (
          <ColorSwatch key={index} color={color} />
        ))}
      </div>
      <Comments comments={comments} />
      <CommentForm onSubmitComment={handleAddComment} />
    </DetailsContainer>
  );
};

export default ArtPieceDetails;
