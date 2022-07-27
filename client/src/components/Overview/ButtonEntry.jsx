import React from 'react';

const ButtonEntry = (props) => {

  var active = (e) => {
    props.setStyle(props.style)
    var el = e.target;
    if (el.id != "button-img") return;
    if (document.querySelector(".active")) {
      document.querySelector(".active").removeAttribute("class");
    }
    el.setAttribute("class", "active");
    console.log(el)
  }
  return (
    <img id="button-img" src={props.style.photos[0].thumbnail_url} onClick={active}/>

  )
}

 export default ButtonEntry;