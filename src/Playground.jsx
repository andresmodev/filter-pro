import { useCharacters } from "./hooks/useCharacter.js";

function Playground() {
  const { characters } = useCharacters();

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
