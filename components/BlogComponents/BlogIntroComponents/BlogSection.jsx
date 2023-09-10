import styles from './BlogSection.module.css'

import Link from 'next/link'

const BlogSection = ({heading, text}) => {
  return (
    <div className={styles.blog_section}>
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link href={`#${heading}`}>Move to {heading}</Link>
    </div>
  )
}

export default BlogSection