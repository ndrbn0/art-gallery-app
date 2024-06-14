import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import ArtPieceDetails from "./ArtPieceDetails";
import { useArtPieces } from "@/contexts/ArtPiecesContext";

const StyledDiv = styled.div`
  gap: 10px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 300px;
  max-width: 300px; // Added max-width to prevent overflow
  height: 500px; // Changed height to auto for responsiveness

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledH2 = styled.h2`
  color: #e19093;
  text-decoration: none;
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
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ArtPiecePreview = ({ slug, image, title, artist }) => {
  const { toggleFavorite, artPiecesInfo } = useArtPieces();

  const isFavorite = artPiecesInfo.find(
    (artPiece) => artPiece.slug === slug
  )?.isFavorite;

  console.log("API ArtPiecePreview", artPiecesInfo);

  return (
    <StyledDiv>
      <CustomLink href={`/art-pieces/${slug}`}>
        <ImageWrapper>
          <Image src={image} alt={title} layout="fill" />
        </ImageWrapper>
        <StyledH2>{title}</StyledH2>
        <p>By {artist}</p>
      </CustomLink>
      <FavoriteButton
        isFavorite={isFavorite}
        toggleFavorite={() => toggleFavorite(slug)}
      />
    </StyledDiv>
  );
};

export default ArtPiecePreview;
