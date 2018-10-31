import React,{Fragment} from 'react';


const CharacterSelect = (props) => {


const options = props.houses.map(house => {
  return <option key={house.name} value={house.url}>{house.name}</option>
})

  return (
    <Fragment>
      <select  id="Character-select" defaultValue="All" onChange={props.handleSelectChange}>
        {options}
      </select>
    </Fragment>
  )
}




export default CharacterSelect;
