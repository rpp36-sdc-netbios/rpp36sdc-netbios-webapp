import React from 'react';
import Gallery from './Gallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import { useState, useEffect } from 'react';

var Overview = (props) => {

  //var [ styles, setStyle ] = useState({styles: {results: [{"style_id":444243,"name":"White & White","original_price":"99.00","sale_price":null,"default?":true,"photos":[{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}],"skus":{"2580652":{"quantity":14,"size":"7"},"2580653":{"quantity":25,"size":"7.5"},"2580654":{"quantity":9,"size":"8"},"2580655":{"quantity":2,"size":"8.5"},"2580656":{"quantity":18,"size":"9"},"2580657":{"quantity":12,"size":"9.5"},"2580658":{"quantity":10,"size":"10"},"2580659":{"quantity":18,"size":"10.5"},"2580660":{"quantity":11,"size":"11"},"2580661":{"quantity":35,"size":"11.5"},"2580662":{"quantity":25,"size":"12"}}},{"style_id":444244,"name":"White & Red","original_price":"99.00","sale_price":null,"default?":false,"photos":[{"thumbnail_url":"https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"},{"thumbnail_url":"https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}]}]}})
  var [ styles, setStyle ] = useState({});
  var [ item, setItem ] = useState('');
  var [ rating, setRating] = useState({});
  var [ pic, setPic] = useState('');
  var [ index, setSlideIndex] = useState({index:0});

  useEffect(() => {
    Promise.all([
      fetch('styles' + props.productId),
      fetch('reviews/meta/' + props.productId)
    ]).then(([res1, res2]) => {
      return Promise.all([res1.json(), res2.json()])
    }).then(([styles, rating]) => {
      setStyle({styles}),
      setRating({rating});
    }).catch(err => {
      console.log(err);
    })
  }, [props.productId, props.productId]);

  // var [item, setItem ] = useState('');

  var onSelect = (e) => {
    var selected =parseInt(e.target.id);
    var index = styles.styles.results.findIndex(x => x.style_id === selected);
    setItem(styles.styles.results[index]);
  }

  var onPic = (e) => {
    var select = e.target.src
    var picindex = item.photos.findIndex(x => x.thumbnail_url === String(e.target.src));
    setPic({pic:select});
    setSlideIndex({index: picindex})
  }

  var showSlides = (n) => {
    let i;
    let slides =  document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    setSlideIndex({index:n})
    }

  let slideIndex = index.index;
  // showSlides(slideIndex);

  // Next/previous controls
  var plusSlides = (e) => {
    if (e.target.className === 'prev') {
      showSlides(slideIndex += -1);
    }

    if (e.target.className === 'next') {
      showSlides(slideIndex += 1);
    }

    console.log('seehere',slideIndex)
  }

  // Thumbnail image controls
  var currentSlide = (n) => {
    showSlides(slideIndex = n);
  }



  console.log(index);
  return (
    <div>
      <div style={{width: '70%', float:'left'}}>
        <Gallery styles={styles} item={item} onPic={onPic} pic ={pic} plusSlides={plusSlides} index={index}/>
      </div>

      <div style={{width: '30%', float:'right'} }>
        <div id='overview-product'>
        <ProductInfo product={props.product} item={item} rating={rating}/>
        </div>
        <div id='overview-style'>
        <StyleSelector styles={styles} onSelect={onSelect} item={item}/>
        </div>
        <AddToCart item={item} />
      </div>
    </div>
  )
}

export default Overview;