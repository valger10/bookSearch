import React, {useState} from 'react'
import { useDebouncedCallback } from 'use-debounce';

import RemoveIcon from '../../common/svg/RemoveIcon'
import Spinner from '../../common/Spinner'
import Dialog from '../../common/Dialog'
import Results from './Results'

export default function Search(props) {
  const [fieldValue, fieldValueFunc] = useState('');
  const [isListOpen, isListOpenFunc] = useState(false);
  const [isDialogOpen, isDialogOpenFunc] = useState(false);
  const [selectedBook, selectedBookFunc] = useState(false);
  
  const [debouncedCallback] = useDebouncedCallback(
    // function
    (value) => {
      props.SearchBooksAction(value)
    },
    // delay in ms
    500
  );

  // Handles value change and starts search
  function handleValueChange(val) {
    isListOpenFunc(val)
    fieldValueFunc(val)
    if (val.length > 2) {
    debouncedCallback(val)
    }
  }
  // Clears field data
  function RemoveFieldData() {
    const { ClearSearchAction } = props
    ClearSearchAction()
    fieldValueFunc('')
  }
  // opens dialog and selects book for dialog
  function openDialog(val) {
    selectedBookFunc(val)
    isDialogOpenFunc(true)
  }
  // closes dialog
  function closeDialog(val) {
    isDialogOpenFunc(false)
  }
  // destructive variables
  const { bookData, loadingData } = props
  return (
    <div className="autocomplete">
      <div className="inputWrapper">
        <div className="inputInnerWrapper">
          <label htmlFor="searchField">Search Books by title</label>
          <input
            type="text"
            value={fieldValue}
            id="searchField"
            onChange={e => handleValueChange(e.target.value)}
            placeholder='Search Books by title'
          />
        
        <button
          className="clearField"
          type="button"
          onClick={() => RemoveFieldData()}
        >
          <span>Clear field</span>
          <RemoveIcon />
        </button>
        </div>
        <button
          className="search"
          type="button"
          onClick={() => handleValueChange(fieldValue)}
        >
          Search
        </button>
      </div>
      {(isListOpen || loadingData) && (
        <div
          className='results'
        >
          {loadingData && (
            <div className="spinnerWpr">
              <Spinner />
            </div>
          )}
          {isListOpen && !loadingData && (
            <Results bookData={bookData} openDialog={openDialog}/>
          )}
        </div>
      )}
      {isDialogOpen && (
        <Dialog closeDialog={closeDialog} >
          <div class="innerContent">
            <div className="leftWpr">
              <img 
                src={'http://covers.openlibrary.org/b/id/'+selectedBook.cover_i+'-L.jpg'} 
                alt='book cover' 
              />
            </div>
            <dl className="rightWpr">
              <dt>{selectedBook.title_suggest}</dt>
              <dd>Author: {selectedBook.author_name}</dd>
              <dd>First publish year: {selectedBook.first_publish_year}</dd>
            </dl>
          </div> 
        </Dialog>
      )}
    </div>
  )
}