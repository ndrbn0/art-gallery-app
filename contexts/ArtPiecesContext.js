import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";

const ArtPiecesContext = createContext();

export const useArtPieces = () => {
  return useContext(ArtPiecesContext);
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export const ArtPiecesProvider = ({ children }) => {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    if (data) setArtPieces(data);
  }, [data]);

  return (
    <ArtPiecesContext.Provider value={{ artPieces, error }}>
      {children}
    </ArtPiecesContext.Provider>
  );
};
