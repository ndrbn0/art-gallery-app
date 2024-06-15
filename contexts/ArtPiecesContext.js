import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

const ArtPiecesContext = createContext();

export const useArtPieces = () => useContext(ArtPiecesContext);

const fetcher = (url) => fetch(url).then((res) => res.json());

const UseLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export const ArtPiecesProvider = ({ children }) => {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPieces, setArtPieces] = useState([]);
  const [artPiecesInfo, setArtPiecesInfo] = UseLocalStorage(
    "artPiecesInfo",
    []
  );

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
