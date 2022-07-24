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
    const radioKey = this.props.item
    const radioLables= radios[radioKey]


  return (
    <FormControl>
      <FormLabel className="form-word">{this.props.item}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {radioLables.map((radioLabel) =>
        <FormControlLabel value={radioLabel} control={<Radio />} label={radioLabel}/>)}


      </RadioGroup>
    </FormControl>
  );
  }
}
export default RowRadioButtonsGroup