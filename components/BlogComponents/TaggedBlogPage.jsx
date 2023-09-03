import styles from './TaggedBlogPage.module.css'

import FilteredBlogSection from './TaggedBlogPageComponents/FilteredBlogSection'

const TaggedBlogPage = ({heading, blue_page=true}) => {
  return (
    <div id={heading} className={`${styles.tagged_blog_page} ${blue_page?styles.blue_page:styles.white_page}`}>
        <h1>{heading}</h1>
        <FilteredBlogSection blue_page={blue_page}/>
    </div>
  )
}

export default TaggedBlogPage