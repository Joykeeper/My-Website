import styles from './TagButton.module.css'

const TagButton = ({tag_name='Tag', active=false, choose_tag}) => {
  return (
    <button onClick={choose_tag} className={`${styles.tag_button} ${active?styles.active:styles.inactive}`}>
        {tag_name}
    </button>
  )
}

export default TagButton