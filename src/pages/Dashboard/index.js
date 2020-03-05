import React, { useContext, useEffect } from 'react'
import { SWContext } from '../../context/Context';
import { Characters } from '../Characters';

export default function Dashboard() {
  
  const { 
    state: { characters },
    action: { getSearch }} = useContext(SWContext);

    useEffect(() => {
      function loadCharacters() {
        getSearch();
      }
  
      loadCharacters();
    }, []);

  return (
    <Characters characters={characters}/>
  )
}