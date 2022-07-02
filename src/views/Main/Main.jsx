import useCharacters from "../../hooks/useCharacters";

import CardList from "../../components/CardList";
import PageSelector from "../../components/PageSelector";
import { useState } from "react";

export const Main = () => {
  const characters = useCharacters();
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      {characters ? (
        <>
          <CardList page={currentPage} characterArray={characters} />
          <PageSelector
            page={currentPage}
            callback={(page) => setCurrentPage(page)}
            length={characters.length}
          />
        </>
      ) : null}
    </div>
  );
};
