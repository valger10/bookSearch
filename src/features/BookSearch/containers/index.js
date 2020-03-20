import { connect } from 'react-redux'
import Search from '../components'
import { ClearSearchAction, SearchBooksAction } from '../SearchBooksAction'

// gets data from Store
const mapStateToProps = state => ({
  bookData: state.SearchBooksReducer.bookData,
  loadingData: state.SearchBooksReducer.showLoading,
})
// connects functions
export default connect(mapStateToProps, {
  ClearSearchAction,
  SearchBooksAction,
})(Search)
