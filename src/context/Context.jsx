import { createContext, useEffect, useState } from "react";

export const LocalContext = createContext();

const LocalDataProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    localStorage.getItem("favourites") || []
  );

  const [recent, setRecent] = useState(localStorage.getItem("recent") || []);

  const addToFavourites = (newFav) => {
    setFavourites([...new Set([...favourites, newFav])]);
  };

  const addToRecent = (visited) => {
    setRecent([...new Set([visited, ...recent])].slice(0, 3));
  };

  useEffect(() => {
    console.log(favourites);
    localStorage.setItem("favourites", favourites);
  }, [favourites]);
  useEffect(() => {
    console.log(recent);
    localStorage.setItem("recent", recent);
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
