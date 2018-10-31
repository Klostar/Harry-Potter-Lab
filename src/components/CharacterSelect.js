import React,{Fragment} from 'react';
import CharacterList from './CharacterList';


const CharacterSelect = (props) => {


  return (
    <Fragment>
      <select  id="Character-select" defaultValue="default" onChange={props.handleSelectChange}>
        <option disabled value='default'>Choose A House </option>
      </select>
    </Fragment>
  )
}




export default CharacterSelect;
