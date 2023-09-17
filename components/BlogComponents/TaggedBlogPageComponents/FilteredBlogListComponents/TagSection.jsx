import TagsList from './FilteredBlogListComponents/TagSectionComponents/TagsList'
import styles from './TagSection.module.css'

const TagSection = ({tags, choose_tag}) => {
  return (
    <div className={styles.tag_section}>
      <h6>Tags</h6>
      <TagsList tags={tags} choose_tag={choose_tag}/>
    </div>
  )
}

export default TagSection