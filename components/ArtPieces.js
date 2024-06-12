import ArtPiecePreview from "./ArtPiecePreview";

const ArtPieces = ({ pieces }) => {
  return (
    <div>
      {pieces.map((piece) => {
        console.log(piece);
        return (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </div>
  );
};

export default ArtPieces;
