import React from 'react'

import styles from './Container.module.css'

const Container = ({ children, size, className, fill }) => {
  return (
    <div
      className={`${styles[size]} ${className ? className : ''}`}
      style={fill ? { backgroundColor: `var(${fill})` } : null}
    >
      {children}
    </div>
  )
}

export default Container
