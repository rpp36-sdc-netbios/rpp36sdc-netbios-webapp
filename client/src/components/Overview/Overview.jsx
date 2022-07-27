import React from 'react';
import Gallery from './Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import { useState, useEffect } from 'react';
import useFetch from '../useFetch.js';
import Description from './Description.jsx'

var Overview = (props) => {
  // var [ styles, setStyle ] = useState({});
  // var [ item, setItem ] = useState('');
  // var [ rating, setRating] = useState({});
  // var [ pic, setPic] = useState('');
  // var [ index, setSlideIndex] = useState({index:0});

  var [ currentStyle, setCurrentStyle ] = useState(null);
  var [ styles, stylesPending, stylesError ] = useFetch('styles' + props.productId);
  var [ rating, ratingPending, ratingError ] = useFetch('reviews/meta/' + props.productId);


  useEffect(() => {
    if(styles) {
      setCurrentStyle(styles.results[0]);
    }
  }, [ styles ]);

  var setStyle = (style) => {
    setCurrentStyle(style);
  };

  return (
    <div className='overview'>
      {currentStyle && <Gallery currentStyle={currentStyle} />}

      <div style={{width: '30%', float:'right', marginLeft: '20px', minWidth: '200px'} }>
        <div id='overview-product'>
          {rating && <ProductInfo product={props.product} item={currentStyle} rating={rating}/>}
        </div>
        <div id='overview-style'>
          {styles && <StyleSelector styles={styles} setStyle={setStyle} item={currentStyle}/>}
        </div>
        <div id='add-to-cart'>
        {currentStyle && <AddToCart item={currentStyle} saveOutfit={props.saveOutfit}/>}
        </div>
      </div>
      <div id='overview-description'>
          {<Description product={props.product} ></Description>}
        </div>
    </div>
  );

  // useEffect(() => {
  //   Promise.all([
  //     fetch('styles' + props.productId),
  //     fetch('reviews/meta/' + props.productId)
  //   ]).then(([res1, res2]) => {
  //     return Promise.all([res1.json(), res2.json()])
  //   }).then(([styles, rating]) => {
  //     console.log('STYLES', styles.results);
  //     setStyle({styles}),
  //     setRating({rating});
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }, [props.productId]);

  // var [item, setItem ] = useState('');

  // var onSelect = (e) => {
  //   var selected = parseInt(e.target.id);
  //   var index = styles.styles.results.findIndex(x => x.style_id === selected);
  //   setItem(styles.styles.results[index]);
  // }

  // var onPic = (e) => {
  //   var select = e.target.src
  //   var picindex = item.photos.findIndex(x => x.thumbnail_url === String(e.target.src));
  //   setPic({pic:select});
  //   setSlideIndex({index: picindex})
  // }

  // var showSlides = (n) => {
  //   let i;
  //   let slides =  document.getElementsByClassName("mySlides")
  //   let dots = document.getElementsByClassName("demo");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //     slides[slideIndex-1].style.display = "block";
  //     dots[slideIndex-1].className += " active";
  //   setSlideIndex({index:n})
  //   }

  // let slideIndex = index.index;
  // // showSlides(slideIndex);

  // // Next/previous controls
  // var plusSlides = (e) => {
  //   if (e.target.className === 'prev') {
  //     showSlides(slideIndex += -1);
  //   }

  //   if (e.target.className === 'next') {
  //     showSlides(slideIndex += 1);
  //   }

  //   console.log('seehere',slideIndex)
  // }

  // // Thumbnail image controls
  // var currentSlide = (n) => {
  //   showSlides(slideIndex = n);
  // }



  // console.log(index);
  // return (
    // <div>
    //   <div style={{width: '70%', float:'left'}}>
    //     <Gallery styles={styles} item={item} onPic={onPic} pic ={pic} plusSlides={plusSlides} index={index}/>
    //   </div>

    //   <div style={{width: '30%', float:'right'} }>
    //     <div id='overview-product'>
    //     <ProductInfo product={props.product} item={item} rating={rating}/>
    //     </div>
    //     <div id='overview-style'>
    //     <StyleSelector styles={styles} onSelect={onSelect} item={item}/>
    //     </div>
    //     <AddToCart item={item} />
    //   </div>
    // </div>
  // )
}

export default Overview;