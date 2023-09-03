import styles from './BlogSection.module.css'

import Link from 'next/link'

const BlogSection = ({heading, text}) => {
  return (
    <div className={styles.blog_section}>
        <h1>{heading}</h1>
        <p>{text}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <Link href={`#${heading}`}>Move to {heading}</Link>
    </div>
  )
}

export default BlogSection