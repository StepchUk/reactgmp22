import React from 'react'
import style from './MyButton.module.css'
import PropTypes from 'prop-types'

const MyButton = ({children, className, ...props}) => {
  return(
    <button className={style[className]} {...props}>
      {children}
    </button>
  )
}

MyButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default MyButton
