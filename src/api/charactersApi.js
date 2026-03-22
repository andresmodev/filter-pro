const BASE_CHARACTERS_URL = "https://dragonball-api.com/api/characters";

export const fetchCharactersPage = async () => {
  const response = await fetch(BASE_CHARACTERS_URL);
  return response;
};
