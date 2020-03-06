import React, { Component } from 'react';
import api from '../service/api';

export const SWContext = React.createContext({})

export default class SWProvider extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
          characters: []
      }

  }

  getSearch = async () => {
    const response = await api.get('people/');

    if(response.data) {
      this.setState({ characters: response.data.results.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) });
    }
  }

  handleRemoveCharacter = (name) => {
    const index = this.state.characters.findIndex(p => p.name === name);

    console.log(index);
    if(index >= 0) {
      this.state.characters.splice(index, 1);
    }
    
    console.log(this.state.characters);
    this.setState({ characters: this.state.characters });
  }
    
  render() {
    const value = {
        state: { ...this.state },
        action: {
          getSearch: this.getSearch,
          handleRemoveCharacter: this.handleRemoveCharacter
        }
      };
  
    return (
        <SWContext.Provider data-testid="characters" value={value}>
            {this.props.children}
        </SWContext.Provider>
    )
  }
}