import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'

const Modal = (props) => {
  const { title, openPopup, setOpenPopup } = props

  return (
    <Dialog open={openPopup} maxWidth='md'>
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <CloseIcon onClick={() => setOpenPopup(!openPopup)} />
        </div>
      </DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  )
}
export default Modal
