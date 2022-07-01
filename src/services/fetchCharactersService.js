const fetchCharactersService = async () => {
  const request = await fetch("http://hp-api.herokuapp.com/api/characters");
  const response = await request.json();
  return response;
};

export default fetchCharactersService;
