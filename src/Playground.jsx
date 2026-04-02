import { useCharacters } from "./hooks/useCharacter.js";
import Pagination from "./components/ui/Pagination/Pagination.jsx";

function Playground() {
  const { characters, meta, page, setPage, loading, error } = useCharacters();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (characters.length === 0)
    return <p>No hay personajes para mostrar. Intenta recargar la página.</p>;

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} style={{ width: "50px" }} />
          <span>{character.race}</span>
          <span>{character.ki}</span>
          <p>{character.affiliation}</p>
        </div>
      ))}
      <Pagination currentPage={page} totalPages={meta.totalPages} onPageChange={setPage} />
    </div>
  );
}

export default Playground;
