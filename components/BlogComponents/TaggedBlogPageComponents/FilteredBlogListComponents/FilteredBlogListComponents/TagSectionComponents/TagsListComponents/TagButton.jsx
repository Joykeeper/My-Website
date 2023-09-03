import styles from './TagButton.module.css'

const TagButton = ({tag_name='Tag', active=false}) => {
  return (
    <button className={`${styles.tag_button} ${active?styles.active:styles.inactive}`}>
        {tag_name}
    </button>
  )
}

export default TagButton