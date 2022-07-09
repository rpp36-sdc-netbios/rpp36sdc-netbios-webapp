import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import './overview.css'

const ProductInfo = (props) => {
  if (props.item) {
    var price = props.item.original_price
  } else {
    var price = props.product.default_price
  }
  var category = props.product.category
  var name = props.product.name
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
        <p id='category-name'>{category}</p>
        <h1 id='expand-name'>{name}</h1>
        <p id='price'>${price}</p>
      </div>
    </div>
  )
}


export default ProductInfo;
