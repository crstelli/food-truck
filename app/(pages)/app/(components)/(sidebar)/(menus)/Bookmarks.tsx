import { SideCard } from "../(components)/SideCard";
import { useSidebarContext } from "../useSidebarContext";

function Bookmarks() {
  const { bookmarks, places } = useSidebarContext();

  return (
    <>
      <h1 className="text-3xl text-center">Bookmarks</h1>
      {bookmarks.length > 0 ? (
        <div className="mt-4">
          {bookmarks.map((bm) => {
            const place = places.find((place) => place.id === bm.id);
            if (place) return <SideCard place={place} key={place.id} />;
          })}
        </div>
      ) : (
        <p className="mt-10 text-center">No places saved</p>
      )}
    </>
  );
}

export { Bookmarks };
