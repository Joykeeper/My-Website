import styles from './Heading.module.css'

const Heading = ({big_words, small_words}) => {
  return (
    <div className={styles.heading}>
      <div>
      <h1>{big_words}</h1>
      <p>-<i>{small_words}</i></p>
      </div>
    </div>
  )
}

export default Heading