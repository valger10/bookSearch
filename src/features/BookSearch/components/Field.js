import React from 'react'
import PropTypes from 'prop-types'

import RemoveIcon from '../../common/svg/RemoveIcon'

export default function Field(props) {
  const { 
    fieldValue, 
    handleValueChange, 
    RemoveFieldData 
  } = props

  return (
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
  )
}
Field.propTypes = {
  fieldValue: PropTypes.string,
  handleValueChange: PropTypes.func,
  RemoveFieldData: PropTypes.func
}