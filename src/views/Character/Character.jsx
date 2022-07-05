import "./index.css";
import pfp from "../../icons/unknown.jpg";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LocalContext } from "../../context/Context";
import { arrayToCommaString } from "../../helpers";
import useCharacters from "../../hooks/useCharacters";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export const Character = () => {
  const navigate = useNavigate();
  const characters = useCharacters();
  const { addToRecent } = useContext(LocalContext);
  const { characterId } = useParams();
  const [pageCharacter, setPageCharacter] = useState();

  useEffect(() => {
    if (!characters) return;

    const index = characters.findIndex(
      (character) => character.name === characterId
    );

    if (index < 0) {
      navigate("/notfound");
    } else {
      addToRecent(characters[index]);
    }

    setPageCharacter(characters[index]);
  }, [characters, characterId, navigate, addToRecent]);

  if (!pageCharacter) return <div>Loading...</div>;

  return (
    <>
      <header>
        <div className="header-container">
          <Button callback={() => navigate(-1)} className="first">
            Back
          </Button>
          <h1>{pageCharacter.name}</h1>
          <h2>
            {arrayToCommaString(pageCharacter.alternate_names) ||
              "No other names"}
          </h2>
        </div>
      </header>
      <main className="character-view">
        <img
          className="character-image"
          src={pageCharacter.image || pfp}
          alt={pageCharacter.name + " profile picture"}
        />
        <section className="character-base">
          <h2>Character:</h2>
          <h3>Species:</h3>
          <p>{pageCharacter.species || "unknown"}</p>
          <h3>Gender:</h3>
          <p>{pageCharacter.gender || "unknown"}</p>
          <h3>Status:</h3>
          <p>{pageCharacter.alive ? "alive" : "passed away"}</p>
          <h3>Birth date:</h3>
          <p>{pageCharacter.dateOfBirth || "unknown"}</p>
        </section>
        <section className="character-hogwarts">
          <h2>Hogwarts:</h2>
          <h3>House:</h3>
          <p>{pageCharacter.house || "No data"}</p>
          <h3>Student:</h3>
          <p>
            {pageCharacter.hogwartsStudent
              ? "Hogwarts student"
              : "not a Hogwarts student"}
          </p>
          <h3>Staff:</h3>
          <p>
            {pageCharacter.hogwartsStaff
              ? "Hogwarts staff"
              : "not Hogwarts staff"}
          </p>
        </section>
        <section className="character-wizard">
          {pageCharacter.wizard ? (
            <h2>{pageCharacter.gender === "female" ? "Witch" : "Wizard:"}</h2>
          ) : (
            <h2>
              {pageCharacter.gender === "female"
                ? "not a witch"
                : "not a wizard:"}
            </h2>
          )}
          <h3>Patronus:</h3>
          <p>{pageCharacter.patronus || "unknown"}</p>
          <h3>Ancestry:</h3>
          <p>{pageCharacter.ancestry || "unknown"}</p>
        </section>
        <section className="character-wand">
          <h2>Wand:</h2>
          <h3>Wood:</h3>
          <p>{pageCharacter.wand?.wood || "unknown"}</p>
          <h3>Core:</h3>
          <p>{pageCharacter.wand?.core || "unknown"}</p>
          <h3>Length:</h3>
          <p>
            {pageCharacter.wand
              ? pageCharacter.wand.length + " inches"
              : "unknown"}
          </p>
        </section>
        <section className="character-description">
          <div>
            <h2>Description:</h2>
            <h3>Hair:</h3>
            <p>{pageCharacter.hairColour || "no data"}</p>
            <h3>Eyes:</h3>
            <p>{pageCharacter.eyeColour || "no data"}</p>
          </div>
          <div>
            <h2>Main actor:</h2>
            <p>{pageCharacter.actor || "no actor"}</p>
          </div>
          <div>
            <h2>Other actors:</h2>
            <p>
              {arrayToCommaString(pageCharacter.alternate_actors) ||
                "no other actors"}
            </p>
          </div>
        </section>
        <Card character={pageCharacter} />
        <Card character={pageCharacter} />
      </main>
      <Footer />
    </>
  );
};
