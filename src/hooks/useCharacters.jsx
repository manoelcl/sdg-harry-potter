import { useState, useEffect } from "react";
import fetchCharactersService from "../services/fetchCharactersService";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const setFetchedCharacters = async () => {
    const fetchData = await fetchCharactersService();
    setCharacters(fetchData);
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
