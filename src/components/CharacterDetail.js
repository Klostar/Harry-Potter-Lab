import React from 'react';

const CharacterDetail = (props) => {
  console.log(props);
return(
  <div>
    <img src={props.details.image} alt={props.details.name}/>
    <p> Patronus: {props.details.patronus}</p>
    <p> The Wand is made of {props.details.wandWood}</p>
    <p> The Wands core is {props.details.wandCore}</p>
    <p> The Wands length is {props.details.wandLength}</p>
  </div>
)
}


export default CharacterDetail;
