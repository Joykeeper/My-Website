import TagsList from './FilteredBlogListComponents/TagSectionComponents/TagsList'
import styles from './TagSection.module.css'

const TagSection = () => {
  return (
    <div className={styles.tag_section}>
      <h6>Tags</h6>
      <TagsList tags={''}/>
    </div>
  )
}

export default TagSection