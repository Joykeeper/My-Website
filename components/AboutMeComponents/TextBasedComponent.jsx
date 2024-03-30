import styles from './TextBasedComponent.module.css'
import TextBasedImages from './TextBasedComponentComponents/TextBasedImages'

const TextBasedComponent = ({text}) => {
  return (
    <div className={styles.text_based_component}>
      <h1>Who am I?</h1>
      <p>{text}</p>
      <TextBasedImages />
    </div>
  )
}

export default TextBasedComponent