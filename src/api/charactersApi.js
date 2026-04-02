const BASE_CHARACTERS_URL = "https://dragonball-api.com/api/characters";

export const fetchCharactersPage = async (page = 1, limit = 10) => {
  const response = await fetch(`${BASE_CHARACTERS_URL}?page=${page}&limit=${limit}`);
  return response;
};
