// imports api calls
import { getBookData } from '../../Api'

export const SEARCH_BOOKS_START = 'SEARCH_BOOKS_START'
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS'
export const SEARCH_BOOKS_START_FAILED = 'SEARCH_BOOKS_START_FAILED'

export const CLEAR_SEARCH_DATA = 'CLEAR_SEARCH_DATA'

// gets data from server
export const SearchBooksAction = val => async dispatch => {
  dispatch({
    type: SEARCH_BOOKS_START,
  })
  try {
    // gets data from server

    let bookData = await getBookData(val)

    dispatch({ type: SEARCH_BOOKS_SUCCESS, bookData })
  } catch (error) {
    // Catches error
    console.log('error', error)
    return dispatch({ type: SEARCH_BOOKS_START_FAILED, payload: error })
  }
}
// clears search data
export const ClearSearchAction = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_DATA,
  })
}
