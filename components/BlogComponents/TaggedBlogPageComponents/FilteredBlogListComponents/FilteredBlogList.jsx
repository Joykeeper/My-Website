import styles from './FilteredBlogList.module.css'
import Blogposts from '../../Blogposts/Blogposts'
import ChangePageButton from '../../ChangePageButton/ChangePageButton'

const FilteredBlogList = ({blue_page}) => {
  return (
    <div className={`${styles.filtered_blog_list} ${blue_page?styles.blue_page:styles.white_page}`}>
        <Blogposts size={'small'}/>
        <ChangePageButton />
    </div>
  )
}

export default FilteredBlogList