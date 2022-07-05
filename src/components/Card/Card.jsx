import "./index.css";
import pfp from "../../icons/unknown.jpg";
import cardFront from "../../icons/cardFront.svg";
import cardBack from "../../icons/cardBack.svg";

import { useNavigate } from "react-router-dom";
import { colorDictionary } from "../../helpers";
import Fav from "../Fav";

export const Card = ({ character, additionalClass }) => {
  const navigate = useNavigate();

  return (
    <article className={additionalClass ? `card ${additionalClass}` : "card"}>
      <div className="image-box">
        <img className="img" alt="background" src={cardBack}></img>
        <img
          className="img"
          src={character.image || pfp}
          alt={character.name + " profile picture"}
        />
        <img className="img" alt="foreground" src={cardFront}></img>
      </div>
      <p
        onClick={() => navigate("/character/" + character.name)}
        style={colorDictionary[character.house]}
      >
        {character.name}
      </p>

      <Fav character={character} />
    </article>
  );
};
