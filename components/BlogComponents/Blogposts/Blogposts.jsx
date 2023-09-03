import styles from './Blogposts.module.css'
import BlogpostItem from './BlogpostItem/BlogpostItem'

const Blogposts = ({size}) => {
  return (
    <div className={`${styles.blogposts} ${size=='big'?styles.big:styles.small}`}>
        <BlogpostItem heading={''}/>
        <BlogpostItem heading={''}/>
        <BlogpostItem heading={''}/>
        <BlogpostItem heading={''}/>
        
        <BlogpostItem heading={''}/>
        <BlogpostItem heading={''}/>
        <BlogpostItem heading={''}/>
        <BlogpostItem heading={''}/>
    </div>
  )
}

export default Blogposts