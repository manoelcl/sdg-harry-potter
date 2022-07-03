import "./index.css";
import pfp from "../../icons/unknown.jpg";
import cardFront from "../../icons/cardFront.svg";
import cardBack from "../../icons/cardBack.svg";
import { useContext } from "react";
import { LocalContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export const Card = ({ character }) => {
  const navigate = useNavigate();
  const { addToFavourites } = useContext(LocalContext);
  return (
    <article className="card">
      <p>{character.name}</p>
      <div className="image-box">
        <img src={cardBack}></img>
        <img src={character.image || pfp} alt={character.name} />
        <img
          src={cardFront}
          onClick={() => navigate("/character/" + character.name)}
        ></img>
      </div>

      <button onClick={() => addToFavourites(character.name)}>fav</button>
    </article>
  );
};
