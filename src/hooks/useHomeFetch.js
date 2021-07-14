import { useState, useEffect, useCallback } from 'react'
import API from '../API'
import { isPersistedState } from '../helpers'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState)
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loadMore, setLoadMore] = useState(false)

  const fetchMovies = useCallback(async (page, searchTerm = '') => {
    try {
      setLoading(true)
      setError(false)
      const movies = await API.fetchMovies(searchTerm, page)
      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : movies.results
      }))
    } catch (error) {
      setError(true);
    }
    setLoading(false)
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState')
      if (sessionState)
        return setState(sessionState)
    }
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm, fetchMovies])

  useEffect(() => {
    if (!loadMore)
      return;
    setLoadMore(false);
    fetchMovies(state.page + 1, searchTerm)
  }, [loadMore, state.page, fetchMovies, searchTerm])

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
  }, [searchTerm, state])


  return { state, loading, error, setSearchTerm, searchTerm, setLoadMore }
}