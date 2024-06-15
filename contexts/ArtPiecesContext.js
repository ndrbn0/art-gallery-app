import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

const ArtPiecesContext = createContext();

export const useArtPieces = () => useContext(ArtPiecesContext);

const fetcher = (url) => fetch(url).then((res) => res.json());

export const ArtPiecesProvider = ({ children }) => {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPieces, setArtPieces] = useState([]);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    if (data) setArtPieces(data);
  }, [data]);

  const toggleFavorite = (slug) => {
    const foundArtPiece = artPiecesInfo.find(
      (artPiece) => slug === artPiece.slug
    );
    if (foundArtPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        )
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: true, comments: [] },
      ]);
    }
  };

  const addComment = (slug, comment) => {
    const foundArtPiece = artPiecesInfo.find(
      (artPiece) => slug === artPiece.slug
    );
    if (foundArtPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, comments: [...artPiece.comments, comment] }
            : artPiece
        )
      );
    } else {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { slug, isFavorite: false, comments: [comment] },
      ]);
    }
  };

  return (
    <ArtPiecesContext.Provider
      value={{ artPieces, artPiecesInfo, error, toggleFavorite, addComment }}
    >
      {children}
    </ArtPiecesContext.Provider>
  );
};
