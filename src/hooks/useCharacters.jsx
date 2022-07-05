import { useState, useEffect } from "react";
import { makeSearchReadyCharactersArray } from "../helpers";
import fetchCharactersService from "../services/fetchCharactersService";

const useCharacters = () => {
  const [characters, setCharacters] = useState();

  const setFetchedCharacters = async () => {
    const fetchData = await fetchCharactersService();
    const searchReady = makeSearchReadyCharactersArray(fetchData);

    setCharacters(searchReady);
  };

  useEffect(() => {
    const asyncHandler = () => {
      setFetchedCharacters();
    };
    asyncHandler();
  }, []);

  return characters;
};

export default useCharacters;
