import styles from './TaggedBlogPage.module.css'

import FilteredBlogSection from './TaggedBlogPageComponents/FilteredBlogSection'

const TaggedBlogPage = ({heading, blogposts, blue_page=true}) => {
  return (
    <div className={`${styles.tagged_blog_page} ${blue_page?styles.blue_page:styles.white_page}`}>
        <h1 id={heading}>{heading}</h1>
        <FilteredBlogSection blogposts={blogposts} blue_page={blue_page}/>
    </div>
  )
}

export default TaggedBlogPage