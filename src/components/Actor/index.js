import { Wrapper, Image } from './Actor.styles'
import PropTypes from 'prop-types'

const Actor = ({ imageUrl, name, character }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

Actor.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
}

export default Actor
