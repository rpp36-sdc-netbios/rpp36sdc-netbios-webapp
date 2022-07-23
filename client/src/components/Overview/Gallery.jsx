import React from 'react';
import { useState, useEffect } from 'react';

const Gallery = (props) => {
  if (props.item === '' && props.styles.styles) {
    var photos = props.styles.styles.results[0].photos
    var mainPic = photos[0].url
    if (props.pic) {
      mainPic = props.pic.pic
    }
    var mainslide = <img id='pic' src={mainPic}></img>
    var photoslides;
    var thumbnails;
    photoslides = photos.map(photo =>
      <div className='mySlides'>
        <img
          src={photo.url}
          alt=""
          className='slide'
        />
      </div>
    )
    thumbnails = photos.map(photo =>
      <img
        src={photo.thumbnail_url}
        alt=""
        className='demo cursor'
        onClick={props.onPic}
      />
    )

    const slides = document.querySelectorAll(".demo");

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateY(${indx}%)`;
    });

    let curSlide = 0;
    const nextSlide = document.querySelector(".btn-next");
    let maxSlide = slides.length - 1;

    if (nextSlide) {
      nextSlide.addEventListener("click", function () {
        if (curSlide === maxSlide) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        slides.forEach((slide, indx) => {
          slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
        });
      });
    }

    const prevSlide = document.querySelector(".btn-prev");
    if (prevSlide) {
      prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
          curSlide = maxSlide;
        } else {
          curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
        });
      });

    }


  } else if (props.item != '' && props.item.photos) {
    var photos = props.item.photos
    var mainPic = photos[0].url
    if (props.pic) {
      mainPic = props.pic.pic
    }

    if (props.index) {
      mainPic = photos[props.index.index].url
    }


    var mainslide = <img id='pic' src={mainPic}></img>
    var photoslides;
    var thumbnails;
    photoslides = photos.map(photo =>
      <div className='mySlides'>
        <img
          src={photo.url}
          alt=""
          className='slide'
        />
      </div>
    )
    thumbnails = photos.map(photo =>
      <img
        src={photo.thumbnail_url}
        alt=""
        className='demo cursor'
        onClick={props.onPic}
      />
    )



    const slides = document.querySelectorAll(".demo");

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateY(${indx}%)`;
    });

    let curSlide = 0;
    const nextSlide = document.querySelector(".btn-next");
    let maxSlide = slides.length - 1;

    if (nextSlide) {
      nextSlide.addEventListener("click", function () {
        if (curSlide === maxSlide) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        slides.forEach((slide, indx) => {
          slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
        });
      });
    }

    const prevSlide = document.querySelector(".btn-prev");
    if (prevSlide) {
      prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
          curSlide = maxSlide;
        } else {
          curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateY(${50 * (indx - curSlide)}%)`;
        });
      });

    }

  }

  return (
    <div className='container'>
      <div className="main-img" style={{ width: '80%', float: 'right' }}>{mainslide}
        <div className="slider-wrapper" style={{ height: '20%', float: 'bottom' }}>
          {photoslides}
        </div>
        <a class="prev" onClick={props.plusSlides}>&#10094;</a>
        <a class="next" onClick={props.plusSlides}>&#10095;</a>
      </div>
      <div className="row" style={{ width: '20%', float: 'left' }}>
        <div className="column">
          {thumbnails}
        </div>
        <button class="btn-prev">up</button>
        <button class="btn-next">down</button>
      </div>

    </div>

  )
}
export default Gallery;










// const Gallery = (props) => {

//   if (props.styles.styles) {
//     var photos = props.styles.styles.results[0].photos
//     var mainPic = photos[0].thumbnail_url
//     if (props.pic) {
//       mainPic = props.pic.pic
//     }
//     var mainslide = <img id='pic'src={mainPic}></img>
//     var photoslides;
//     photoslides = photos.map(photo =>
//     <img
//         src={photo.thumbnail_url}
//         alt=""
//         className='slide'
//         onClick={props.onPic}
//       />
//       )

//   };

//   const slides = document.querySelectorAll(".slide");

//   slides.forEach((slide, indx) => {
//     slide.style.transform = `translateX(${indx * 30}%)`;
//   });

//   let curSlide = 0;
//   const nextSlide = document.querySelector(".btn-next");
//   let maxSlide = slides.length - 1;

//   if (nextSlide) {
//   nextSlide.addEventListener("click", function () {
//       if (curSlide === maxSlide) {
//         curSlide = 0;
//       } else {
//         curSlide++;
//       }

//       slides.forEach((slide, indx) => {
//         slide.style.transform = `translateX(${30 * (indx - curSlide)}%)`;
//       });
//     });
//   }

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
//           slide.style.transform = `translateX(${30 * (indx - curSlide)}%)`;
//         });
//       });

//     }

//   return (
//     <div>
//     <div className="main-img" style={{height: '80%', float:'top'} }>{mainslide}</div>
//     <div className="slider-wrapper" style={{height: '20%', float:'bottom'} }>
//       {photoslides}
//       <button class='btn btn-next' >→</button>
//       <button class='btn btn-prev' >←</button>
//     </div>
//     </div>
//   )
// }


// export default Gallery;
