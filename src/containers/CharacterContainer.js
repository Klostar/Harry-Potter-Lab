import React from 'react';
import CharacterSelect from '../components/CharacterSelect'
import CharacterList from '../components/CharacterList'

class CharacterContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }



  componentDidMount(){
    this.loadHouse(this.props.houses[0].url)
  }

  loadHouse(url){
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({characters: json}))
    .catch(err => console.error(err))
  }

  handleSelectChange(event){
    this.loadHouse(event.target.value);
  }

  handleSelectedCharacter(index){
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter});

  }


  render(){
    return(
      <div>
        <CharacterSelect handleSelectChange={this.handleSelectChange}
          houses={this.props.houses}/>
          <CharacterList characters={this.state.characters} url={this.props.houses[0].url}
            handleSelectChange={this.handleSelectChange} selectedCharacter={this.handleSelectedCharacter}/>

          </div>

        )
      }
    }

    export default CharacterContainer;
