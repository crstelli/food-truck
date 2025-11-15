import { Bookmark as BookmarkIcon, BookmarkX } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarContext } from "@/app/(pages)/app/(components)/(sidebar)/useSidebarContext";
import type { Bookmark } from "@/app/(lib)/(types)/Bookmark";

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
    <Button onClick={handleBookRemove} variant="destructive">
      <BookmarkX />
    </Button>
  ) : (
    <Button onClick={handleBook} variant="secondary">
      <BookmarkIcon />
    </Button>
  );
}

export { BookmarkButton };
