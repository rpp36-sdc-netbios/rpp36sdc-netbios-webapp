import React from 'react';
import './rating.css';
import Stars from './Stars.jsx';
import StarBar from "./StarBar.jsx";


class Summary extends React.Component {
  constructor(props){
    super(props);
    var recommend = parseInt(this.props.results.recommended.true);
    var negative = parseInt(this.props.results.recommended.false);
    var star_1=0;
    var star_2=0;
    var star_3=0;
    var star_4=0;
    var star_5=0;
    var total =0;
    for(var key in this.props.results.ratings){
      total+=(parseInt(this.props.results.ratings[key])*parseInt(key))
    }

    console.log('total'+total)
    var num = (Math.round(total/25*10)/10/5)*100;
    var str =num.toString()+"%";
    console.log('str in summary'+str);
    var totalStars = parseInt(this.props.results.ratings[5])+
    parseInt(this.props.results.ratings[4])+parseInt(this.props.results.ratings[3])
    + parseInt(this.props.results.ratings[2])+parseInt(this.props.results.ratings[1]);
    console.log("totalStars"+totalStars);
    var bar5 = Math.floor(parseInt(this.props.results.ratings[5])/totalStars*100);
    console.log('bar5'+bar5);
    var bar4 = Math.floor(parseInt(this.props.results.ratings[4])/totalStars*100);
    var bar3 = Math.floor(parseInt(this.props.results.ratings[3])/totalStars*100);
    var bar2 = Math.floor(parseInt(this.props.results.ratings[2])/totalStars*100);
    var bar1 = Math.floor(parseInt(this.props.results.ratings[1])/totalStars*100);

    var keys=['Fit','Length',"Comforyt"]


    this.state ={
      percent:Math.floor((recommend/(recommend+negative))*100),
      star5:this.props.results.ratings[5],
      star4:this.props.results.ratings[4],
      star3:this.props.results.ratings[3],
      star2:this.props.results.ratings[2],
      star1:this.props.results.ratings[1],
      average:Math.round(total/25*10)/10,
      size :this.props.results.characteristics.Size ? this.props.results.characteristics.Size.value:5,
      fit :this.props.results.characteristics.Fit ? this.props.results.characteristics.Fit.value:5,
      length:this.props.results.characteristics.Length ? this.props.results.characteristics.Length.value:5,
      comfort:this.props.results.characteristics.Comfort ? this.props.results.characteristics.Comfort.value:5,
      quality: this.props.results.characteristics.Quality  ? this.props.results.characteristics.Quality.value:5,
      width: this.props.results.characteristics.Width  ? this.props.results.characteristics.Width.value:5,
      starsDisplay:str,
      bar5Display:bar5.toString()+"%",
      bar4Display:bar4.toString()+"%",
      bar3Display:bar3.toString()+"%",
      bar2Display:bar2.toString()+"%",
      bar1Display:bar1.toString()+"%",

    }
  }
  render(){
    return(
      <div className="summary-box">
        <h1> RATINGS &amp; REVIEWS</h1>
        <h2>{this.state.average}</h2>
        <Stars starsDisplay ={this.state.starsDisplay}/>
        <p> {this.state.percent}% of reviews recommend this product </p>
        <div>5 stars
          <StarBar barDisplay = {this.state.bar5Display}/>
        </div>
        <div>4 stars
          <StarBar barDisplay = {this.state.bar4Display}/>
        </div>
        <div>3 starsDisplay
          <StarBar barDisplay = {this.state.bar3Display}/>
        </div>
        <div>2 stars
          <StarBar barDisplay = {this.state.bar2Display}/>
        </div>
        <div>1 stars
          <StarBar barDisplay = {this.state.bar1Display}/>
        </div>
        <div> Size {this.state.size} </div>
        <div> Width {this.state.width} </div>
        <div> Comfort {this.state.comfort} </div>
        <div> Quality {this.state.quality} </div>
        <div> Length {this.state.length} </div>
        <div> Fit {this.state.fit} </div>
      </div>

    )
  }

}
export default Summary;