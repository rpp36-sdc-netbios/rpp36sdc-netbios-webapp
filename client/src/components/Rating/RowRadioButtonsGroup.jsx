import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './rating.css';

class RowRadioButtonsGroup extends React.Component {
  constructor(props){
    super(props);
    this.handleRadio=this.handleRadio.bind(this)


  }

  handleRadio(event){
    this.props.handleRadio(event)

  }
  render(){
    const radios = {
      Size: ["A size too small", "1⁄2 a size too small", 'Perfect', "1⁄2 a size too big", "A size too wide"],
      Width: ["Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
      Comfort: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
      Quality: ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
      Length: ["Runs Short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"],
      Fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
    }
    const radioItem = this.props.item
    const radioKey = (this.props.itemKey).toString()
    const radioLables= radios[radioItem]


  return (
    <FormControl>
      <FormLabel className="form-word">{this.props.item}</FormLabel>
      <RadioGroup
        row

      >
        {radioLables.map((radioLabel,index) =>
        <FormControlLabel name ={radioKey} value={index+1} key={index} control={<Radio />} label={radioLabel}
        onClick={this.handleRadio}/>)}


      </RadioGroup>
    </FormControl>
  );
  }
}
export default RowRadioButtonsGroup