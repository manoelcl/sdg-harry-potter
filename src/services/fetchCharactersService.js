import { BASE_URL } from "../env";

const fetchCharactersService = async () => {
  try {
    const request = await fetch(BASE_URL);
    const response = await request.json();
    return response;
  } catch (err) {
    return new Error("Data could not be fetched");
  }
};

export default fetchCharactersService;
