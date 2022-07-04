
import React from 'react';
import './rating.css';
class StarBar extends React.Component {
  constructor(props){
    super(props);


  }
  render(){
    var bar ={
      width: this.props.barDisplay,
      height: "16px",
      backgroundColor: "black",
    }
    return(
      <div className ="bar-container">
        <div style ={bar}>
        </div>
      </div>

    )
  }


}
export default StarBar;