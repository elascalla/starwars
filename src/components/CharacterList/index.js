import React, { useState } from 'react';
import api from '~/service/api';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  async function handleCharacter() {
    
    const response = await api.get('people/');

    if(response.data) {
      setCharacters(response.data.results);
    }
  }

  return (
    <div>
      <ul data-testid="character-list">
        {characters.length}
        {characters.map(character => (
          <li key={character.id}>
            {character.name}
          </li>))}
      </ul>
      <button onClick={handleCharacter}>Add</button>
    </div>
  )
}