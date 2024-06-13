import ArtPiecePreview from "./ArtPiecePreview";

const ArtPieces = ({ pieces }) => {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
};

export default ArtPieces;
