import { useSidebarContext } from "../useSidebarContext";

function Bookmarks() {
  const { bookmarks, places } = useSidebarContext();

  return (
    <div>
      {bookmarks.length > 0 ? (
        <div>
          {bookmarks.map((bm) => (
            <div key={bm.id}>
              {places.find((place) => place.id === bm.id)?.name}
            </div>
          ))}
        </div>
      ) : (
        <p>No places saved</p>
      )}
    </div>
  );
}

export { Bookmarks };
