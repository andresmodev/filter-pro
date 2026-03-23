import { useCharacters } from "./hooks/useCharacter.js";

function Playground() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>`Error al cargar: {error.message || "Error desconocido"}`</p>;
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
    </div>
  );
}

export default Playground;
