import styles from './BlogpostItem.module.css'

const BlogpostItem = ({heading}) => {
  return (
    <div className={styles.blogpost_item} style={{backgroundImage: `url(${'./photos/blog.png'})`}}>
        <div className={styles.name}>
          <p>
            {heading} When I was young and bold and lol 
          </p>
          <button>Read</button>
        </div>
    </div>
  )
}

export default BlogpostItem