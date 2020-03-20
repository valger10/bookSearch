import {
  SEARCH_BOOKS_START,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_START_FAILED,
  CLEAR_SEARCH_DATA,
} from './SearchBooksAction'

const initialState = {
  showLoading: false,
      bookData: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_START:
      return {
        ...state,
        showLoading: true,
      }
    case SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        bookData: action.bookData,
        showLoading: false,
      }
    case SEARCH_BOOKS_START_FAILED:
      return {
        ...state,
        showLoading: false,
      }
    case CLEAR_SEARCH_DATA:
      return {
        ...state,
        bookData: {},
        showLoading: false,
      }
    default:
      return state
  }
}
