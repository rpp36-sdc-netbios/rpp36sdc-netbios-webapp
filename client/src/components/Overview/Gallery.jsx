import React from 'react';

const Gallery = (props) => {

  if (props.styles.styles) {
    var photos = props.styles.styles.results[0].photos
    var mainPic = photos[0].thumbnail_url
    if (props.pic) {
      mainPic = props.pic.pic
    }
    var mainslide = <img id='pic'src={mainPic}></img>
    var photoslides;
    photoslides = photos.map(photo =>
    <img
        src={photo.thumbnail_url}
        alt=""
        className='slide'
        onClick={props.onPic}
      />
      )
    console.log(photoslides)
  };

  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 30}%)`;
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
        slide.style.transform = `translateX(${30 * (indx - curSlide)}%)`;
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
          slide.style.transform = `translateX(${30 * (indx - curSlide)}%)`;
        });
      });

    }

  return (
    <div>
    <div className="main-img" style={{height: '80%', float:'top'} }>{mainslide}</div>
    <div className="slider-wrapper" style={{height: '20%', float:'bottom'} }>
      {photoslides}
      <button class='btn btn-next' >→</button>
      <button class='btn btn-prev' >←</button>
    </div>
    </div>
  )
}


export default Gallery;
