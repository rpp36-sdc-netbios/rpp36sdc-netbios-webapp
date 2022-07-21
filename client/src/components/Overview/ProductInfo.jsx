import React from 'react';
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Box from "@mui/material/Box";
import './overview.css'

const ProductInfo = (props) => {
  var selectentry;

  if (props.item) {
    var price = props.item.original_price
    var sale = props.item.sale_price
    selectentry = <p> <span id='bold'>STYLE ></span><span> {props.item.name} </span></p>
  } else {
    var price = props.product.default_price
    selectentry = <p> <span id='bold'>STYLE ></span><span>  SELETED STYLE</span></p>
  }

  if (props.rating.rating) {
    var rates = props.rating.rating.ratings;
    var sum = 0;
    var count = 0
    for (var i = 0; i < Object.entries(rates).length; i++) {
      sum = sum + Object.entries(rates)[i][0] * Object.entries(rates)[i][1];
      count = count + Object.entries(rates)[i][1] * 1;
    }
    var avg = sum/count;


  var category = props.product.category
  var description = props.product.description
  var name = props.product.name
  var totalStars = 5;
  var activeStars = avg;

  console.log(sale, sale == null)
  if (isNaN(sale)|| sale == null || sale === undefined) {
    if (isNaN(activeStars)) {

      return (
        <div>

          <div className='product-detail'>
            <p id='category-name'>{category}</p>
            <h1 id='expand-name'>{name}</h1>
            <p id='price'>${price}</p>
            <text id='description'>{description}</text>
          </div>

          <div className='style-select-word'>
              {selectentry}
          </div>

        </div>
      )
    } else {
      var activeRating = (activeStars/5 * 100).toString()+"%";
      return (
        <div>
            <div className="star-line">
              <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
            <div className="star-fill" style={ {width: activeRating} }>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
            </div>
            </div>

           <p id='read-review' onClick={() => window.location.replace("/#rating-main")}>Read all reviews</p>
          <div className='product-detail'>
            <p id='category-name'>{category}</p>
            <h1 id='expand-name'>{name}</h1>
            <p id='price'>${price}</p>
          </div>

          <div className='style-select-word'>
              {selectentry}
          </div>

        </div>
      )
    }

  } else {

       if (isNaN(activeStars)) {

      return (
        <div>

          <div className='product-detail'>
            <p id='category-name'>{category}</p>
            <h1 id='expand-name'>{name}</h1>
            <p id='price'><s>${price}</s></p>
            <p id='sale'>${sale}</p>
            <text id='description'>{description}</text>
          </div>

          <div className='style-select-word'>
              {selectentry}
          </div>

        </div>
      )
    } else {
      var activeRating = (activeStars/5 * 100).toString()+"%";
      return (
        <div>
            <div className="star-line">
              <AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
            <div className="star-fill" style={ {width: activeRating} }>
              <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
            </div>
            </div>

           <p id='read-review' onClick={() => window.location.replace("/#rating-main")}>Read all reviews</p>
          <div className='product-detail'>
            <p id='category-name'>{category}</p>
            <h1 id='expand-name'>{name}</h1>
            <p id='price'><s>${price}</s></p>
            <p id='sale'>${sale}</p>
          </div>

          <div className='style-select-word'>
              {selectentry}
          </div>

        </div>
      )
    }

  }
}



}

export default ProductInfo;
