import Heading from '@/components/Heading'
import BlogIntro from '@/components/BlogComponents/BlogIntro'
import TaggedBlogPage from '@/components/BlogComponents/TaggedBlogPage'
import RandomBlogsPage from '@/components/BlogComponents/RandomBlogsPage'

const page = () => {
  return (
    <div>
        <Heading big_words={'Blog'} small_words={'The storage of my writings'} />
        <BlogIntro />
        <TaggedBlogPage heading={'Books'} blue_page={true}/>
        <TaggedBlogPage heading={'Techs'} blue_page={false}/>
        <RandomBlogsPage heading={'Other'}/>
    </div>
  )
}

export default page