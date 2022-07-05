import { createContext, useCallback, useEffect, useState } from "react";
import { getFromLocalStorage, setIntoLocalStorage } from "../helpers";

export const LocalContext = createContext();

const LocalDataProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites") || []
  );

  const [recent, setRecent] = useState(getFromLocalStorage("recent") || []);

  const addToFavourites = (newFav) => {
    if (favourites.find((favourite) => favourite.name === newFav.name)) return;
    setFavourites([...favourites, newFav]);
  };

  const removeFromFavourites = (favToRemove) => {
    const newArray = favourites;
    const index = favourites.findIndex(
      (character) => character.name === favToRemove
    );
    newArray.splice(index, 1);
    setFavourites([...newArray]);
  };

  const addToRecent = useCallback(
    (visited) => {
      if (recent[0]?.name === visited.name) return;
      setRecent([...new Set([visited, ...recent])].slice(0, 3));
    },
    [setRecent, recent]
  );

  useEffect(() => {
    setIntoLocalStorage("favourites", favourites);
  }, [favourites]);
  useEffect(() => {
    setIntoLocalStorage("recent", recent);
  }, [recent]);

  return (
    <LocalContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        recent,
        addToRecent,
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};
export default LocalDataProvider;
