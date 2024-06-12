import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

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
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
