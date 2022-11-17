import { useState, useEffect } from "react";

export const useCurrentShowcase = (showcaseItems) => {
  //// ["1","1","1","1","1","1","1"]
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    if (showcaseItems.length > 0) {
      setCurrentItems(showcaseItems.slice(0, 4));
    }
  }, [showcaseItems]);

  return currentItems;
};
