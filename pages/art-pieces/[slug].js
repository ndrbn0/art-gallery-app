import { useRouter } from "next/router";
import { useArtPieces } from "../../contexts/ArtPiecesContext";
import ArtPieceDetails from "../../components/ArtPieceDetails";

const ArtPieceDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { artPieces, error } = useArtPieces();

  if (error) return <div>Error loading art piece details.</div>;
  if (!artPieces || !artPieces.length) return <div>Loading...</div>;

  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) return <div>Art piece not found.</div>;

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      slug={artPiece.slug}
      colors={artPiece.colors}
    />
  );
};

export default ArtPieceDetailPage;
