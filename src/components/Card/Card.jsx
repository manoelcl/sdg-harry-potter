import "./index.css";
import pfp from "../../icons/unknown.jpg";
import cardFront from "../../icons/cardFront.svg";
import cardBack from "../../icons/cardBack.svg";
import { useContext } from "react";
import { LocalContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { colorDictionary } from "../../helpers";

export const Card = ({ character }) => {
  const navigate = useNavigate();
  const { addToFavourites } = useContext(LocalContext);

  return (
    <article className="card">
      <div className="image-box">
        <img alt="background" src={cardBack}></img>
        <img
          src={character.image || pfp}
          alt={character.name + " profile picture"}
        />
        <img alt="foreground" src={cardFront}></img>
      </div>
      <p
        onClick={() => navigate("/character/" + character.name)}
        style={colorDictionary[character.house]}
      >
        {character.name}
      </p>

      <button onClick={() => addToFavourites(character.name)}>fav</button>
    </article>
  );
};
