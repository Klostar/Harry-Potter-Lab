import React from 'react';
import CharacterSelect from '../components/CharacterSelect'

class CharacterContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(json => this.setState({characters: json}))
    .catch(err => console.console.error())
  }

render(){
  return(
    <div>
    <CharacterSelect/>

</div>
  )
}
}

export default CharacterContainer;
