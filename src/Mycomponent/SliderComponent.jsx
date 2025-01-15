import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../CSS/slider.css'

const SliderComponent = (props) => {

  const { reverseArr } = props


  // Without responsive

  // const settings = {
  //     dots: true,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1
  // };

  // for responsive also

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };




  return (
    <>
      <div className='w-[85%] mx-auto mt-9 mb-20 sm:mb-9'>
        <Slider {...settings} >
          {reverseArr?.map((news, i) => {
            return <div style={{ width: '290px', height: '100%', }} key={i}>
              <a rel="noreferrer" href={news.url} target='_blank' >
                <img onClick={() => window.assign} style={{ width: '98%', height: '100%', margin: 'auto' }} src={news?.urlToImage ? news?.urlToImage : 'https://tutorialslink.com/images/default-news-image.png'} alt="slider" />
              </a>
            </div>
          })}
        </Slider>
      </div>

    </>
  )
}

export default SliderComponent
