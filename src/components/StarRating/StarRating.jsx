import PropTypes from 'prop-types'
import { FaStar } from "react-icons/fa"
import './StarRating.scss'


const StarRating = ({ rating }) => {
    const maxStars = 5;
    const filledStars = Math.floor(rating);

    StarRating.propTypes = {
        rating: PropTypes.number.isRequired,
    }
  
    const renderStars = () => {
      const stars = [];
  
      for (let i = 0; i < maxStars; i++) {
        if (i < filledStars) {
          stars.push(<span key={i} className="red star"><FaStar /></span>);
        } else {
          stars.push(<span key={i} className="grey star"><FaStar /></span>);
        }
      }
  
      return stars;
    };
  
    return (
      <div className="star-rating">
        {renderStars()}
      </div>
    );
  };
  
  export default StarRating;