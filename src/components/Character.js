import React from 'react';
import CharacterDetail from './CharacterDetail'

class Character extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: false
    }
    this.handleSelectedCharacter = this.handleSelectedCharacter.bind(this)
  }



  handleSelectedCharacter(index){
    this.setState({display: !this.state.display})
  }


  render(){
    return(
      <div className='details'>
        <button onClick={this.handleSelectedCharacter}> {this.props.name}</button>
        <CharacterDetail details={this.props} display={this.state.display}/>
      </div>
    )
  }

}



export default Character;
