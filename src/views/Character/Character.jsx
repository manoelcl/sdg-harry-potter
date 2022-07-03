import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LocalContext } from "../../context/Context";
import useCharacters from "../../hooks/useCharacters";

export const Character = () => {
  const navigate = useNavigate();
  const characters = useCharacters();
  const { addToRecent, recent } = useContext(LocalContext);
  const { characterId } = useParams();
  const [pageCharacter, setPageCharacter] = useState();

  useEffect(() => {
    if (characters.length < 1) return;

    const characterIndex = characters.findIndex(
      (character) => character.name === characterId
    );

    if (characterIndex >= 0) {
      setPageCharacter(characters[characterIndex]);
      addToRecent(characterId);
    } else {
      navigate("/notfound");
    }
  }, [characters]);

  return <div>Character page {pageCharacter ? pageCharacter.name : null}</div>;
};
