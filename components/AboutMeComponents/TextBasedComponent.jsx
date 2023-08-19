import styles from './TextBasedComponent.module.css'
import TextBasedImages from './TextBasedComponentComponents/TextBasedImages'

const TextBasedComponent = ({text}) => {
  return (
    <div className={styles.text_based_component}>
      <h1>Who am I?</h1>
      <p>{text}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <TextBasedImages />
    </div>
  )
}

export default TextBasedComponent