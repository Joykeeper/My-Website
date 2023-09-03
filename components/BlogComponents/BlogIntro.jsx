import styles from './BlogIntro.module.css'
import BlogSection from './BlogIntroComponents/BLogSection'

const BlogIntro = () => {
  return (
    <div className={styles.blog_intro}>
        <h1>What do I write about?</h1>
        <div className={styles.sections}>
            <BlogSection heading={'Books'} text={''}/>
            <BlogSection heading={'Techs'} text={''}/>
            <BlogSection heading={'Other'} text={''}/>
        </div>
    </div>
  )
}

export default BlogIntro