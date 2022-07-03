import { createContext, useEffect, useState } from "react";
import { getFromLocalStorage, setIntoLocalStorage } from "../helpers";

export const LocalContext = createContext();

const LocalDataProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    getFromLocalStorage("favourites") || []
  );

  const [recent, setRecent] = useState(getFromLocalStorage("recent") || []);

  const addToFavourites = (newFav) => {
    setFavourites([...new Set([...favourites, newFav])]);
  };

  const addToRecent = (visited) => {
    setRecent([...new Set([visited, ...recent])].slice(0, 3));
  };

  useEffect(() => {
    setIntoLocalStorage("favourites", favourites);
  }, [favourites]);
  useEffect(() => {
    setIntoLocalStorage("recent", recent);
  }, [recent]);

  return (
    <LocalContext.Provider
      value={{ favourites, addToFavourites, recent, addToRecent }}
    >
      {children}
    </LocalContext.Provider>
  );
};
export default LocalDataProvider;
