import styles from './Blogposts.module.css'
import BlogpostItem from './BlogpostItem/BlogpostItem'

const Blogposts = ({size}) => {
  return (
    <div className={`${styles.blogposts} ${size=='big'?styles.big:styles.small}`}>
        <BlogpostItem heading={'When I was young and bold and lol '}/>
        <BlogpostItem heading={'asda'}/>
        <BlogpostItem heading={'asdas'}/>
        <BlogpostItem heading={'asdaaaa'}/>
        
        <BlogpostItem heading={'dddd'}/>
        <BlogpostItem heading={'www'}/>
        <BlogpostItem heading={'aaad'}/>
        <BlogpostItem heading={'asdaww'}/>
    </div>
  )
}

export default Blogposts