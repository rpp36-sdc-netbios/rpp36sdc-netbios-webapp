import React from 'react';
import './rating.css';

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
    var keys=['Fit','Length',"Comforyt"]
    // for(var key in this.props.characteristics){

    // }

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
    }
  }
  render(){
    return(
      <div className="summary">
        <h1> RATINGS &amp; Reviews Rating</h1>
        <h2>{this.state.average}</h2>
        <p> {this.state.percent}% of reviews recommend this product </p>
        <div>5 stars {this.state.star5}</div>
        <div>4 stars {this.state.star4}</div>
        <div>3 stars {this.state.star3}</div>
        <div>2 stars {this.state.star2}</div>
        <div>1 stars {this.state.star1}</div>
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