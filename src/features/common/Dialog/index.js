import React from 'react'
import RemoveDialogIcon from '../svg/RemoveDialogIcon'

export default function Dialog (props) {
  const { children, closeDialog } = props
  return (
    <React.Fragment>
      <button className='closeDialog'
        onClick={() => closeDialog(false) }
      > 
        <RemoveDialogIcon/>
        <span>Close dialog</span>
      </button>
      <div className='dialogBg' /> 
      <div className='dialogWpr'>
        <div className='inner'>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}