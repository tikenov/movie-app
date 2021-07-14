import { useEffect, useState, useCallback } from 'react'
import API from '../API'
import { isPersistedState } from '../helpers'

export const useMovieFetch = (movieId) => {
  const initialState = {
    directors: [],
    actors: []
  }
  const [state, setState] = useState(initialState)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      const movie = await API.fetchMovie(movieId)
      const credits = await API.fetchCredits(movieId)
      const directors = credits.crew.filter(e => e.job === 'Director')
      const newState = {
        ...movie,
        actors: credits.cast,
        directors
      };
      setState(newState)
      sessionStorage.setItem(movieId, JSON.stringify(newState))
      setLoading(false)
    } catch (error) {
      setError(true)
    }
  }, [movieId]);

  useEffect(() => {
    const sessionState = isPersistedState(movieId)
    if (sessionState)
      return setState(sessionState)
    fetchData()
  }, [movieId, fetchData])

  return { state, error, loading }
}