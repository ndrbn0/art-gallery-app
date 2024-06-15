import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
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

  const toggleFavorite = useCallback((slug) => {
    setArtPiecesInfo((prevInfo) => {
      const foundArtPiece = prevInfo.find((artPiece) => artPiece.slug === slug);
      if (foundArtPiece) {
        return prevInfo.map((artPiece) =>
          artPiece.slug === slug
            ? { ...artPiece, isFavorite: !artPiece.isFavorite }
            : artPiece
        );
      } else {
        return [...prevInfo, { slug, isFavorite: true }];
      }
    });
  }, []);

  return (
    <ArtPiecesContext.Provider
      value={{ artPieces, artPiecesInfo, error, toggleFavorite }}
    >
      {children}
    </ArtPiecesContext.Provider>
  );
};
