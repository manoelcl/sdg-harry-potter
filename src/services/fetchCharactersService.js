import { BASE_URL } from "../env";

const fetchCharactersService = async () => {
  const request = await fetch(BASE_URL);
  const response = await request.json();
  return response;
};

export default fetchCharactersService;
