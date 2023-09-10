import styles from './BlogIntro.module.css'
import BlogSection from './BlogIntroComponents/BLogSection'

const BlogIntro = () => {

  let books_text = 'I like to read a lot. And I like to write. So, what will happen if I combine these activities? Exactly – the Books section. Here I talk about the books I read. I mostly focus on non-fiction genre, but sometimes fiction literature will also pop-up. I write about my lessons from the books and I look into some other aspects. Which ones? Read my “Books” blogposts to find out)'
  let techs_text = 'As you may have already read, I am a Computer Science student. I learn about different technologies and to not only digest the material more effectively but make it easier for others to dive into some of the things I study, I decided to write these blogposts. Here you will read about my CS journey filled with tutorials on various techs.'
  let other_text = 'This section contains blogposts which don’t belong to any of the previous categories. Here I write about my life as a student in a foreign country, the difficulties I encounter and tips which I found to be useful. The blogposts of the Other section are more varied, so hopefully you will come across something interesting in here as well.'

  return (
    <div className={styles.blog_intro}>
        <h1>What do I write about?</h1>
        <div className={styles.sections}>
            <BlogSection heading={'Books'} text={books_text}/>
            <BlogSection heading={'Techs'} text={techs_text}/>
            <BlogSection heading={'Other'} text={other_text}/>
        </div>
    </div>
  )
}

export default BlogIntro