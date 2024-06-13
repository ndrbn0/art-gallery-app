import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import SpotlightPiece from "../components/SpotlightPiece";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Error loading art pieces.</div>;
  if (!artPieces) return <div>Loading...</div>;

  const randomIndex = Math.floor(Math.random() * artPieces.length);
  const spotlightPiece = artPieces[randomIndex];

  return (
    <div>
      <StyledH1>Art Gallery</StyledH1>
      <SpotlightPiece piece={spotlightPiece} />
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
