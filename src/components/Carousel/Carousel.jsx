import { useState } from 'react'
import PropTypes from 'prop-types'
import './Carousel.scss'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"


const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = images.length

  Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="carousel">
      <img
        className="image-carousel"
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`} 
      />
      {totalImages > 1 && (
        <>
          <div className='image-info'>
            {currentIndex + 1}/{totalImages}
          </div>
          <button className="arrow-left" onClick={goToPrevSlide}>
            <MdOutlineArrowBackIos />
          </button>
          <button className="arrow-right" onClick={goToNextSlide}>
            <MdOutlineArrowForwardIos />
          </button>
        </>
      )}
    </div>
  )
}

export default Carousel
