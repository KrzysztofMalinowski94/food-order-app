import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

const Backdrop = () => {
  return(
    <div className={classes.backdrop} />
  )
}

const ModalOverlay = (props) => {
  return(
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

export const Modal = (props) => {
  return (<>
    {ReactDOM.createPortal(<Backdrop/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
  </>
  )
}

Modal.propTypes = {
  className: PropTypes.string
}

export default Modal
