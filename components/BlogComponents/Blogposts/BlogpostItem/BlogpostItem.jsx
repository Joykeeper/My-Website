import Link from 'next/link'
import styles from './BlogpostItem.module.css'

const BlogpostItem = ({heading}) => {
  return (
    <div className={styles.blogpost_item} style={{backgroundImage: `url(${'./photos/blog.png'})`}}>
        <div className={styles.name}>
          <p>
            {heading}
          </p>
          <div className={styles.read}><Link href={heading}>Read</Link></div>
        </div>
    </div>
  )
}

export default BlogpostItem