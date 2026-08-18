const TILE_COUNT = 600;
const COLUMNS = 12;

export default function LogoTileBackground() {
  return (
    <div className="logo-tile-background" aria-hidden="true">
      {Array.from({ length: TILE_COUNT }, (_, index) => {
        const row = Math.floor(index / COLUMNS);
        const column = index % COLUMNS;
        const showLogo = row % 2 === column % 2;

        return (
          <div key={index} className="flex items-center justify-center">
            {showLogo && <img src="/logo.svg" alt="" className="logo-tile" />}
          </div>
        );
      })}
    </div>
  );
}
