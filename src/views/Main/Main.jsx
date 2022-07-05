import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import useCharacters from "../../hooks/useCharacters";
import { LocalContext } from "../../context/Context";
import { setFormDataFromParams, setPageFromParams } from "../../helpers";

import CardList from "../../components/CardList";
import PageSelector from "../../components/PageSelector";
import SearchBar from "../../components/SearchBar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const characters = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState();

  const [currentPage, setCurrentPage] = useState(
    setPageFromParams(searchParams)
  );

  const [formData, setFormData] = useState(setFormDataFromParams(searchParams));

  const { recent } = useContext(LocalContext);

  useEffect(() => {
    const search = new URLSearchParams(formData);
    search.append("page", currentPage);
    setSearchParams(search.toString());
  }, [currentPage, formData, setSearchParams]);

  useEffect(() => {
    if (!characters) return;

    const results = characters.filter((character) => {
      for (let key of formData.keys()) {
        if (key === "search") {
          if (!character.searchString.includes(formData.get(key))) return false;
        } else if (
          key !== "orderBy" &&
          key !== "order" &&
          key !== "advancedSearch"
        ) {
          if (formData.get(key) && character[key] !== formData.get(key))
            return false;
        }
      }
      return true;
    });

    if (formData.get("orderBy")) {
      const order = formData.get("order") === "asc" ? true : false;
      const orderBy = formData.get("orderBy");
      if (orderBy === "yearOfBirth")
        results.sort((a, b) =>
          order ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]
        );
      if (orderBy === "name")
        results.sort((a, b) =>
          order
            ? a[orderBy].localeCompare(b[orderBy])
            : b[orderBy].localeCompare(a[orderBy])
        );
    }

    setFilteredCharacters(results);
  }, [characters, formData]);

  if (!characters) return <div>Loading</div>;
  return (
    <>
      <header>
        <div className="header-container">
          <h1>Wizarding Web</h1>
          <h2>Harry Potter character search</h2>
          <Button callback={() => navigate("/favourites")} className="last">
            Favs
          </Button>
        </div>
      </header>
      <main>
        <section>
          <h2>Recently visited:</h2>
          {recent.length > 0 ? (
            <CardList additionalClass="exception" characterArray={recent} />
          ) : (
            <div className="card-list">
              <h2>No visited characters yet</h2>
            </div>
          )}
        </section>
        <section>
          <SearchBar
            initial={formData}
            callback={(data) => setFormData(data)}
          ></SearchBar>
          <h2>Search results:</h2>
          {filteredCharacters ? (
            <>
              {filteredCharacters.length > 0 ? (
                <CardList
                  page={currentPage}
                  characterArray={filteredCharacters}
                />
              ) : (
                <div className="card-list">
                  <h2>No results for the current search.</h2>
                </div>
              )}
              <PageSelector
                page={currentPage}
                callback={(page) => setCurrentPage(page)}
                length={filteredCharacters.length}
              />
            </>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
};
