import "./index.css";

import Card from "../Card";

export const CardList = ({
  characterArray,
  page = 0,
  perPage = 18,
  additionalClass,
}) => {
  const min = page * perPage;
  const max = min + perPage;

  return (
    <ul
      className={additionalClass ? `card-list ${additionalClass}` : "card-list"}
    >
      {characterArray.slice(min, max).map((character, index) => (
        <li key={index}>
          <Card additionalClass={additionalClass} character={character} />
        </li>
      ))}
    </ul>
  );
};
