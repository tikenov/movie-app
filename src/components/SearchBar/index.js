import { useEffect, useState, useRef } from 'react'
import { Wrapper, Content } from './SearchBar.styles'
import searchIcon from '../../images/search-icon.svg'
import PropTypes from 'prop-types'

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('')
  const initial = useRef(true)

  useEffect(() => {
    if (initial.current)
      return initial.current = false
    const timer = setTimeout(() => { setSearchTerm(state) }, 500);
    return () => clearTimeout(timer)
  }, [setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder="Search Movie"
          onChange={e => setState(e.target.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  )
}

SearchBar.propTypes = { setSearchTerm: PropTypes.func }

export default SearchBar