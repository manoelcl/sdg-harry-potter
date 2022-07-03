import "./index.css";

import Card from "../Card";

export const CardList = ({ characterArray, page = 0, perPage = 18 }) => {
  const min = page * perPage;
  const max = min + perPage;

  return (
    <ul className="card-list">
      {characterArray.slice(min, max).map((character, index) => (
        <li key={index}>
          <Card character={character} />
        </li>
      ))}
    </ul>
  );
};
