import { Bookmark as BookmarkIcon, BookmarkX } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarContext } from "./ContextProvider";
import type { Bookmark } from "@/lib/(types)/Bookmark";

interface Props {
  placeId: number;
}

function BookmarkButton({ placeId }: Props) {
  const {
    addBookmark,
    removeBookmark,
    isBookmarked: isBookmarkedFn,
  } = useSidebarContext();
  const isBookmarked = isBookmarkedFn(placeId);

  function handleBook() {
    const bookmark: Bookmark = { id: placeId };
    addBookmark(bookmark);
  }

  function handleBookRemove() {
    removeBookmark(placeId);
  }
  return isBookmarked ? (
    <Button onClick={handleBookRemove} variant="destructive" size="icon">
      <BookmarkX />
    </Button>
  ) : (
    <Button onClick={handleBook} variant="secondary" size="icon">
      <BookmarkIcon />
    </Button>
  );
}

export { BookmarkButton };
