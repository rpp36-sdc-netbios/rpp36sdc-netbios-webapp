import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = () => {
  var totalStars = 5;
  var activeStars = 3;
  return (
    <div>
        {[...new Array(totalStars)].map((arr, index) => {
      return index < activeStars ? <StarIcon  style={{ fontSize: 20 }} /> : <StarBorderIcon   style={{ fontSize: 20 }} />;
    })}
    </div>
  )
}


export default StarRating;
