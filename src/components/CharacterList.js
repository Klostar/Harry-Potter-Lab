import React from 'react';
import Character from './Character'

const CharacterList = (props) => {
  if(props.characters == null || props.characters.length === 0)
{
  return <p> No Characters to Show</p>
}

const characters = props.characters.map((character, index) => {
  return (
  <Character
    key={index}
    name={character.name}
    patronus={character.patronus}
    wandWood={character.wand.wood}
    wandCore={character.wand.core}
    wandLength={character.wand.length}
    image={character.image}
    selectedCharacter={props.selectedCharacter}
  />
  )
})


return(
  <div>{characters}</div>
  )


}



export default CharacterList;
