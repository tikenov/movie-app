import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Thumb = ({ image, movieId, clickable }) => {
  return (
    <>
      {clickable ?
        <Link to={`${movieId}`}>
          <Image src={image} alt='movie-thumb' />
        </Link > :
        <Image src={image} alt='movie-thumb' />}
    </>
  )
}


Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}


export default Thumb
