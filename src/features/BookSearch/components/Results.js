import React from 'react'
import PropTypes from 'prop-types'

export default function Results(props) {
  const { bookData, openDialog } = props
  return(
    <ul>
      {bookData.docs &&
      bookData.docs.map(val => {
        return (
          <li 
            className='wpr'
            key={val.key}
          >
            <button
              onClick={() => openDialog(val)}
            >
            <div className="imgWpr">
              <img
                src={'http://covers.openlibrary.org/b/id/'+val.cover_i+'-S.jpg'} 
                alt='book cover' />
            </div>
            <dl className="rightWpr">
              <dt>{val.title_suggest}</dt>
              <dd>Author: {val.author_name}</dd>
            </dl>
            </button>
          </li>
        )
      })}
      {bookData.docs && bookData.docs.length === 0 && (
        <li className="foundNothing">
          <p>Found Nothing</p>
        </li>
      )}
    </ul>
  )
}
Results.propTypes = {
  bookData: PropTypes.object,
  openDialog: PropTypes.func
}