import { useState, useEffect } from "react";
import { makeSearchReadyCharactersArray } from "../helpers";
import fetchCharactersService from "../services/fetchCharactersService";

const useCharacters = () => {
  const [characters, setCharacters] = useState();
  const [error, setError] = useState();

  const setFetchedCharacters = async () => {
    const fetchData = await fetchCharactersService();
    if (fetchData.name === "Error") {
      setError(fetchData);
      return;
    }
    const searchReady = makeSearchReadyCharactersArray(fetchData);

    setCharacters(searchReady);
  };

  useEffect(() => {
    const asyncHandler = () => {
      setFetchedCharacters();
    };
    asyncHandler();
  }, []);

  return { characters, error };
};

export default useCharacters;
