import React from 'react';
import CharacterSelect from '../components/CharacterSelect'
import CharacterList from '../components/CharacterList'

class CharacterContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: []
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
    .catch(err => console.console.error())
  }

  handleSelectChange(event){
    this.loadHouse(event.target.value);
  }

  render(){
    return(
      <div>
        <CharacterSelect handleSelectChange={this.handleSelectChange}
          houses={this.props.houses}/>
          <CharacterList characters={this.state.characters} url={this.props.houses[0].url}
            handleSelectChange={this.handleSelectChange}/>
      </div>

    )
  }
}

export default CharacterContainer;
