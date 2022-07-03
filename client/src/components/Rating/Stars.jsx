import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import React from 'react';
import './rating.css';
class Stars extends React.Component {
  constructor(props){
    super(props);


  }
  render(){
    var overlay ={
      color: "black",
      position: "absolute",
      top: "0",
      left: "0",
      width: this.props.starsDisplay,
      display: "flex",
      justifyContent: "space-between",
      overflow: "hidden",
    }
    return(
      <div className ="stars">
        <div style ={overlay}>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
        </div>
        <div className="stars-base">
          <StarBorderIcon  color="black"/>
          <StarBorderIcon  color="black"/>
          <StarBorderIcon  color="black"/>
          <StarBorderIcon  color="black"/>
          <StarBorderIcon  color="black"/>
        </div>
      </div>

    )
  }


}
export default Stars;

