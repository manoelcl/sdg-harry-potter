import useCharacters from "../../hooks/useCharacters";

export const Main = () => {
  const characters = useCharacters();

  return (
    <div>
      {characters
        ? characters.map((character, index) => (
            <div key={index}> {character.name}</div>
          ))
        : null}
    </div>
  );
};
