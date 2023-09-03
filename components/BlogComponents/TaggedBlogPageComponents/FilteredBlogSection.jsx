import FilteredBlogList from './FilteredBlogListComponents/FilteredBlogList'
import TagSection from './FilteredBlogListComponents/TagSection'
import styles from'./FilteredBlogSection.module.css'

const FilteredBlogSection = ({blue_page}) => {
  return (
    <div className={styles.filtered_blog_section}>
      <FilteredBlogList blue_page={blue_page}/>
      <TagSection />
    </div>
  )
}

export default FilteredBlogSection