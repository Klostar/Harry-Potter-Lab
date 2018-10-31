import React, { Component } from 'react';
import CharacterContainer from './containers/CharacterContainer'
import './App.css';

class App extends Component {
  render() {
  const houses =[
    {name: 'All', url:'http://hp-api.herokuapp.com/api/characters'},
    {name:'Gryffindor', url:'http://hp-api.herokuapp.com/api/characters/house/gryffindor'},
    {name:'Slytherin', url:'http://hp-api.herokuapp.com/api/characters/house/slytherin'},
    {name:'Ravenclaw', url:'http://hp-api.herokuapp.com/api/characters/house/ravenclaw'},
    {name:'Hufflepuff', url:'http://hp-api.herokuapp.com/api/characters/house/hufflepuff'},
    {name:'None', url:'http://hp-api.herokuapp.com/api/characters'}
  ]
return (
  <CharacterContainer houses={houses}/>
    );
  }
}

export default App;
