import React,{Fragment} from 'react';
import CharacterList from './CharacterList';


const CharacterSelect = (props) => {



  handleChange(event) {
    props.onHouseSelected(event.target.value);

  }


  return (
    <Fragment>
      <select id="Character-select" defaultValue="default" onChange={handleChange}>
        <option disabled value='default'>Choose A House </option>
      </select>
    </Fragment>
  )
}




export default CharacterSelect;
