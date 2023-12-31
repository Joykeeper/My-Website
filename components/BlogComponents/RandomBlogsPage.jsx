import styles from './RandomBlogsPage.module.css'
import NoFilterBlogList from './RandomBlogsPageComponents/NoFilterBlogList'

const RandomBlogsPage = ({heading, blogposts, blue_page=true}) => {
  return (
    <div className={`${styles.random_blogs_page} ${blue_page?styles.blue_page:styles.white_page}`}>
        <h1 id={heading}>{heading}</h1>
        <NoFilterBlogList blogposts={blogposts} blue_page={blue_page}/>
    </div>
  )
}

export default RandomBlogsPage