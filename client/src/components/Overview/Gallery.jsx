import React from 'react';

const Gallery = (props) => {

  if (props.styles.styles) {
    var photos = props.styles.styles.results[0].photos
    var photoslides;
    photoslides = photos.map(photo =>
      <div class="slide">
      <img
        src={photo.thumbnail_url}
        alt=""
      />
    </div>
      )
  };


  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  let curSlide = 0;
  const nextSlide = document.querySelector(".btn-next");
  let maxSlide = slides.length - 1;
  console.log(maxSlide)
  if (nextSlide) {
  nextSlide.addEventListener("click", function () {
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
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
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
      });

    }
  //var mainPic =  props.styles.styles.results[0].photos[0].url
  return (
    <div className="gallery">
      {photoslides}
      <button class='btn btn-next' >→</button>
      <button class='btn btn-prev' >←</button>
    </div>
  )
}


export default Gallery;
