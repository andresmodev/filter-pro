import { useEffect, useState } from "react";
import { fetchCharactersPage } from "../api/charactersApi.js";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const response = await fetchCharactersPage();
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setCharacters(data.items);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching characters:", err);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, []);

  return { characters, loading, error };
};
