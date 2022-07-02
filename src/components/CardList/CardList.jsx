import Card from "../Card";

export const CardList = ({ characterArray, page = 1, perPage = 20 }) => {
  const min = page * perPage;
  const max = min + perPage;

  return (
    <ul>
      {characterArray.slice(min, max).map((character, index) => (
        <li key={index}>
          <Card character={character} />
        </li>
      ))}
    </ul>
  );
};
