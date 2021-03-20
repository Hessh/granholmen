import styles from './ContentContainer.module.css'

const ContentContainer = ({ children, size, className, fill }) => {
  return (
    <div
      className={`${styles[size]} ${className ? className : ''}`}
      style={fill ? { backgroundColor: `var(${fill})` } : null}
    >
      {children}
    </div>
  )
}

export default ContentContainer
