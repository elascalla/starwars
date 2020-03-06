import React, { useContext, useState } from 'react'
import { SWContext } from '../../context/Context';

import { CharactersList, Content } from './styles';

export const Characters = (props) => {

  const { characters } = props;
  const [name, setName] = useState('');

  const { 
    action: { handleRemoveCharacter }} = useContext(SWContext);

  function handleRemove(name) {
    handleRemoveCharacter(name);
    setName('');
  }

  return (
    <>
      <Content>
        <label htmlFor="name">Character to remove</label>
        {/* <input 
          name="name" 
          id="name" 
          required
          value={name}
          onChange={e => setName(e.target.value)}
        /> */}
        <select value={name} onChange={e => setName(e.target.value)}>
          <option value="">Select</option>
          {characters.map(character => (
            <option key={character.url} value={character.name}>{character.name}</option>
          ))}
        </select>
        <button
            type="button"
            onClick={() => handleRemove(name)}>
          <span>Delete</span>
        </button>
      </Content>
      <CharactersList data-testid="characters-list">
        {characters.map(character => (
          <li key={character.url}>
            <strong style={{ color: character.eye_color }} >Name: {character.name}</strong>
            <span style={{ color: character.eye_color }}>Eye color: {character.eye_color}</span> 

            <button
              type="button"
              onClick={() => handleRemoveCharacter(character.name)}
            >

              <span>Delete</span>
            </button>
          </li>
        ))}
      </CharactersList>
    </>
  )
}