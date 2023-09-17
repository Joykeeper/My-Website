import styles from './FilteredBlogList.module.css'
import Blogposts from '../../Blogposts/Blogposts'
import ChangePageButton from '../../ChangePageButton/ChangePageButton'

const FilteredBlogList = ({blogs, set_page, cur_page, blue_page}) => {

  let max_page = 1
  if (typeof blogs == 'object'){
    let a = Object.entries(blogs).length/8
    max_page = Math.floor(a) < a ? Math.floor(a)+1 : Math.floor(a)
  }

  return (
    <div className={`${styles.filtered_blog_list} ${blue_page?styles.blue_page:styles.white_page}`}>
        <Blogposts size={8} page={cur_page} blogposts={blogs}/>
        <ChangePageButton set_page={set_page} cur_page={cur_page} max_page={max_page}/>
    </div>
  )
}

export default FilteredBlogList