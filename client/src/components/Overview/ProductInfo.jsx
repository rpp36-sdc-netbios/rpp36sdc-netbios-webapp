import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import './overview.css'

const ProductInfo = () => {
  var totalStars = 5;
  var activeStars = 3;
  return (
    <div>
      <div className='pd-star-left'>
        {[...new Array(totalStars)].map((arr, index) => {
      return index < activeStars ? <StarIcon  style={{ fontSize: 17 }} /> : <StarBorderIcon   style={{ fontSize: 17 }} />;
    })}
       <p id='read-review'>Read all reviews</p>
      </div>

      <div className='product-detail'>
        <p id='category-name'>CATEGORY</p>
        <h1 id='expand-name'>Expanded Product Name</h1>
        <p id='price'>$369</p>
      </div>
    </div>
  )
}


export default ProductInfo;
