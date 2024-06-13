import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
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

  return (
    <div>
      <StyledH1>Art Gallery</StyledH1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}

console.log(data);
