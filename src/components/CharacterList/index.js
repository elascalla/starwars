import React, { useState, useEffect } from 'react';
import api from '~/service/api';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    async function handleCharacter() {
    
      const response = await api.get('people/');
  
      if(response.data) {
        setCharacters([...characters, response.data.results]);
      }
    }
    
    handleCharacter();
  }, [])

  return (
    <div>
      <ul data-testid="character-list">
        {characters.length}
        {characters.map(character => (
          <li key={character.id}>
            {character.name}
          </li>))}
      </ul>
    </div>
  )
}