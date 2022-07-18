import React from 'react';
import './rating.css';


const Characteristics = (props)=> {
  var item = Object.keys(props.item)[0]
  var valueItem = props.item[item].value
  // console.log(item+valueItem)
  var text1="";
  var text2="";
  var text3="";
  if(item==="Size"){
    text1="Too small"
    text2="Perfect"
    text3="Too Large"

  }else if(item==="Quality"){
    text1="Poor";
    text2="Okay";
    text3="Perfect"

  }else if(item ==="Fit") {
    text1 ="Tight"
    text2="Perfect"
    text3="long"
  }else if(item ==="Length"){
    text1="Short";
    text2 ="Perfect";
    text3 ="Long"

  } else if (item ==="Width"){
    text1 ="Too narrow";
    text2 ="Perfect";
    text3 ="Too wide";

  }else{
    text1 ="Poor";
    text2 ="Expected"
    text3 ="Perfect"
  }




  return(
  <div className="slidecontainer">
    <div>
    <p>{item}</p>
    <input type="range" min="1" max="5" value={valueItem} className="slider"
    id="myRange"></input>
    </div>

    <span className ="alignleft">{text1}</span>
    <span className ="aligncenter">{text2}</span>
    <span className ="alignright">{text3}</span>
    {/* <div style="clear: both;"></div> */}


  </div>
  )
}

export default Characteristics;