import { useEffect, useState } from "react";
import { fetchCharactersPage } from "../api/charactersApi.js";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const response = await fetchCharactersPage();
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setCharacters(data.items);
      } catch (err) {
        console.error("Error fetching characters:", err);
      }
    };
    loadCharacters();
  }, []);

  return { characters };
};
