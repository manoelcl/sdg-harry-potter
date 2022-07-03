import { useContext, useEffect, useState } from "react";

import useCharacters from "../../hooks/useCharacters";
import { LocalContext } from "../../context/Context";

import CardList from "../../components/CardList";
import PageSelector from "../../components/PageSelector";
import SearchBar from "../../components/SearchBar";

export const Main = () => {
  const characters = useCharacters();
  const [currentPage, setCurrentPage] = useState(0);
  const { recent } = useContext(LocalContext);
  const [filteredRecent, setFilteredRecent] = useState();

  useEffect(() => {
    console.log(characters);
    if (!characters || !recent) return;
    setFilteredRecent(
      characters.filter((character) => recent.includes(character.name))
    );
  }, [characters]);

  return (
    <main>
      <header>
        <h1>Wizarding Web</h1>
        <h2>Harry Potter character search</h2>
      </header>
      <section>
        <h2>Recently visited</h2>
        {filteredRecent ? <CardList characterArray={filteredRecent} /> : null}
      </section>
      <section>
        <SearchBar></SearchBar>
        <h2>Search results</h2>
        {characters ? (
          <CardList page={currentPage} characterArray={characters} />
        ) : null}
        <PageSelector
          page={currentPage}
          callback={(page) => setCurrentPage(page)}
          length={characters.length}
        />
      </section>
    </main>
  );
};
