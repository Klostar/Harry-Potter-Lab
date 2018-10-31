import React from 'react';
import CharacterDetail from './CharacterDetail'

class Character extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      image:'',
      patronus:'',
      wandCore:'',
      wandWood:'',
      wandLength:''

    }
    this.renderDetails = this.renderDetails.bind(this)
  }

  renderDetails(){
    this.setState({
      name: this.props.name,
      image:this.props.image,
      patronus:this.props.patronus,
      wandCore:this.props.wandCore,
      wandWood:this.props.wandWood,
      wandLength:this.props.wandLength
    })
    return(
      <CharacterDetail details={this.props} />
    )
  }


  render(){
    return(
      <div className='details'>
        <h3 onClick={this.renderDetails}> {this.props.name}</h3>

      </div>
    )
  }

}



export default Character;
