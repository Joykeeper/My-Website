import styles from './FilteredBlogList.module.css'
import Blogposts from '../../Blogposts/Blogposts'
import ChangePageButton from '../../ChangePageButton/ChangePageButton'

const FilteredBlogList = ({blogs, set_page, cur_page, active_tags, blue_page}) => {

  

  let filtered_blogposts = {};
  let max_page = 1
  console.log(active_tags)
  if (typeof blogs == 'object'){
    if (active_tags.length != 0){
      Object.entries(blogs).forEach(([id, info]) => {
        for (const tag of info[1]){
          console.log(tag)
          if (active_tags.includes(tag)){
            filtered_blogposts[id] = info
          }
        }
      })
      let a = Object.entries(filtered_blogposts).length/8
      max_page = Math.floor(a) < a ? Math.floor(a)+1 : Math.floor(a)>=1? Math.floor(a):1
    } else{
      console.log('lol');
      let a = Object.entries(blogs).length/8
      max_page = Math.floor(a) < a ? Math.floor(a)+1 : Math.floor(a) 
    }
    if (max_page < cur_page) cur_page=max_page;
  }

  return (
    <div className={`${styles.filtered_blog_list} ${blue_page?styles.blue_page:styles.white_page}`}>
        <Blogposts size={8} page={cur_page} blogposts={active_tags.length != 0? filtered_blogposts:blogs}/>
        <ChangePageButton set_page={set_page} cur_page={cur_page} max_page={max_page}/>
    </div>
  )
}

export default FilteredBlogList