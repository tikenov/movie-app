import { Wrapper, Content } from './Grid.sytles'
import PropTypes from 'prop-types'

const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  )
}

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.array
}

export default Grid
