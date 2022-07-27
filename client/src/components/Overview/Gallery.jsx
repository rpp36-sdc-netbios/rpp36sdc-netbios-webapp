import React, { startTransition } from 'react';
import { useState, useEffect } from 'react';
import PicSlider from './PicSlider.jsx';

const Gallery = ({ currentStyle }) => {

  var [ expandImage, setExpandImage ] = useState(false);
  var [ selectedImage, setSelectedImage ] = useState(currentStyle.photos[0].url);
  var [ photos, setPhotos ] = useState(currentStyle.photos);

  var expandedImageStyle = {
    width: '900px',
    position: 'absolute',
  }

  useEffect(() => {
    if(expandImage) {
      var stars = document.getElementsByClassName('star-line');
      stars[0].style.zIndex = '-1';
    }
  }, [expandImage])

  useEffect(() => {
    photos.forEach((photo, i) => {
      if (photo.url === selectedImage) {
        setSelectedImage(currentStyle.photos[i].url)
      }
    });
    setPhotos(currentStyle.photos);
  }, [currentStyle]);

  var handleThumbnailDown = () => {
    var temp = [...photos];
    var photo = temp.shift();
    temp.push(photo);
    setPhotos(temp);
  }

  var handleThumbnailUp = () => {
    var temp = [...photos];
    var photo = temp.pop();
    temp.unshift(photo);
    setPhotos(temp);
  }

  var handleImageChange = (direction) => {
    var count = direction === 'left' ? -1 : 1;
    photos.forEach(async (photo, i) => {
      if (photo.url === selectedImage) {
        if (i === 1 && count === -1) handleThumbnailUp();
        if (count + i < 0) {
          setSelectedImage(photos[photos.length - 1].url);
          handleThumbnailUp();
        } else {
          setSelectedImage(photos[i + count].url);
        }
        if (i > 3) handleThumbnailDown();
      }
    });
  }

  return (
    <div className='gallery'>
      <div className='mainphoto' style={expandImage ? expandedImageStyle : {}}>
        <img src={selectedImage} style={expandImage ? {width: '900'} : {}} />
      </div>
      <div className='thumbnails' >
        <div className='slideup angles' onClick={handleThumbnailUp}>&#708;</div>
        {photos && <PicSlider photos={photos} setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>}
        <div className='slidedown angles' onClick={handleThumbnailDown}>&#709;</div>
      </div>
        <div className='slideleft angles' onClick={() => handleImageChange('left')}>‹</div>
        <div className='slideright angles' onClick={() => handleImageChange('right')} style={expandImage ? {left: '800px'} : {}}>›</div>
        <div className='imageresize' onClick={() => setExpandImage(!expandImage)} style={expandImage ? {left: '800px'} : {}}>&#9744;</div>
    </div>
  );



//   if (props.item === '' && props.styles.styles) {
//     var photos = props.styles.styles.results[0].photos
//     var mainPic = photos[0].url
//     if (props.pic) {
//       mainPic = props.pic.pic
//     }
//     var mainslide = <img id='pic' src={mainPic}></img>
//     var photoslides;
//     var thumbnails;
//     photoslides = photos.map(photo =>
//       <div className='mySlides'>
//         <img
//           src={photo.url}
//           alt=""
//           className='slide'
//         />
//       </div>
//     )
//     thumbnails = photos.map(photo =>
//       <img
//         src={photo.thumbnail_url}
//         alt=""
//         className='demo cursor'
//         onClick={props.onPic}
//       />
//     )

//     const slides = document.querySelectorAll(".demo");

//     slides.forEach((slide, indx) => {
//       slide.style.transform = `translateY(${indx}%)`;
//     });

//     let curSlide = 0;
//     const nextSlide = document.querySelector(".btn-next");
//     let maxSlide = slides.length - 1;

//     if (nextSlide) {
//       nextSlide.addEventListener("click", function () {
//         if (curSlide === maxSlide) {
//           curSlide = 0;
//         } else {
//           curSlide++;
//         }

//         slides.forEach((slide, indx) => {
//           // slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
//           var row = document.getElementsByClassName('row');
//           row[0].scrollTop(-100);
//         });
//       });
//     }

//     const prevSlide = document.querySelector(".btn-prev");
//     if (prevSlide) {
//       prevSlide.addEventListener("click", function () {
//         // check if current slide is the first and reset current slide to last
//         if (curSlide === 0) {
//           curSlide = maxSlide;
//         } else {
//           curSlide--;
//         }

//         //   move slide by 100%
//         slides.forEach((slide, indx) => {
//           slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
//         });
//       });

//     }


//   } else if (props.item != '' && props.item.photos) {
//     var photos = props.item.photos
//     var mainPic = photos[0].url
//     if (props.pic) {
//       mainPic = props.pic.pic
//     }

//     if (props.index) {
//       mainPic = photos[props.index.index].url
//     }


//     var mainslide = <img id='pic' src={mainPic}></img>
//     var photoslides;
//     var thumbnails;
//     photoslides = photos.map(photo =>
//       <div className='mySlides'>
//         <img
//           src={photo.url}
//           alt=""
//           className='slide'
//         />
//       </div>
//     )
//     thumbnails = photos.map(photo =>
//       <img
//         src={photo.thumbnail_url}
//         alt=""
//         className='demo cursor'
//         onClick={props.onPic}
//       />
//     )



//     const slides = document.querySelectorAll(".demo");

//     slides.forEach((slide, indx) => {
//       slide.style.transform = `translateY(${indx}%)`;
//     });

//     let curSlide = 0;
//     const nextSlide = document.querySelector(".btn-next");
//     let maxSlide = slides.length - 1;

//     if (nextSlide) {
//       nextSlide.addEventListener("click", function () {
//         if (curSlide === maxSlide) {
//           curSlide = 0;
//         } else {
//           curSlide++;
//         }

//         slides.forEach((slide, indx) => {
//           slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
//         });
//       });
//     }

//     const prevSlide = document.querySelector(".btn-prev");
//     if (prevSlide) {
//       prevSlide.addEventListener("click", function () {
//         // check if current slide is the first and reset current slide to last
//         if (curSlide === 0) {
//           curSlide = maxSlide;
//         } else {
//           curSlide--;
//         }

//         //   move slide by 100%
//         slides.forEach((slide, indx) => {
//           slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
//         });
//       });

//     }

//   }

//   return (
//     <div className='container'>
//       <div className="main-img" style={{ width: '80%', float: 'right' }}>{mainslide}
//         <div className="slider-wrapper" style={{ height: '20%', float: 'bottom' }}>
//           {photoslides}
//         </div>
//         <a class="prev" onClick={props.plusSlides}>&#10094;</a>
//         <a class="next" onClick={props.plusSlides}>&#10095;</a>
//       </div>
//       <div className="row" style={{ width: '20%', float: 'left' }}>
//         <div className="column">
//           {thumbnails}
//         </div>
//         <button class="btn-prev">up</button>
//         <button class="btn-next">down</button>
//       </div>

//     </div>

//   )
}
export default Gallery;