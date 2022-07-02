export const Card = ({ character }) => {
  return (
    <article>
      <img src={character.image} alt={character.name} />
      {character.name}
    </article>
  );
};
