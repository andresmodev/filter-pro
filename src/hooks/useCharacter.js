import { useEffect, useState } from "react";
import { fetchCharactersPage } from "../api/charactersApi.js";

export const useCharacters = () => {
  const [charactersData, setCharactersData] = useState({
    items: [],
    meta: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchCharactersPage(page, limit);
        if (!response.ok) throw new Error(`HTTP error, status: ${response.status}`);

        const json = await response.json();
        setCharactersData({
          items: json.items || [],
          meta: json.meta || {},
        });
      } catch (err) {
        const errorMessage = err.message || "Ocurrió un error inesperado";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, [page, limit]);

  return {
    characters: charactersData.items,
    meta: charactersData.meta,
    loading,
    error,
    page,
    setPage,
    limit,
    setLimit,
  };
};
