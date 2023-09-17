import styles from './Blogposts.module.css'
import BlogpostItem from './BlogpostItem/BlogpostItem'


const Blogposts = ({size, page, blogposts}) => {

  let blogs = []
  if (typeof blogposts == 'object'){
    blogs = Object.values(blogposts).slice((page-1)*size, page*size).map((blogpost, i)=>{
      return <BlogpostItem heading={blogpost[0]}/>
    })
  } 
  

  return (
    <div className={`${styles.blogposts} ${size==12?styles.big:styles.small}`}>
        {blogs}
    </div>
  )
}

export default Blogposts