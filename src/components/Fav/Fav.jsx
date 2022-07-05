import "./index.css";
import fav from "../../icons/Fav.svg";
import unfav from "../../icons/Fav_solid.svg";
import { useContext } from "react";
import { LocalContext } from "../../context/Context";

export const Fav = ({ className, character }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(LocalContext);

  if (favourites.find((favourite) => favourite.name === character.name)) {
    return (
      <img
        src={unfav}
        alt="unfav"
        onClick={() => {
          removeFromFavourites(character.name);
        }}
        className="fav"
      />
    );
  } else {
    return (
      <img
        src={fav}
        alt="fav"
        onClick={() => addToFavourites(character)}
        className="fav"
      />
    );
  }
};
