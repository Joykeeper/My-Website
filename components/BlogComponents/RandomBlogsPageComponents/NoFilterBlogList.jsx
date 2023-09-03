import styles from './NoFilterBlogList.module.css'

import ChangePageButton from '../ChangePageButton/ChangePageButton'
import Blogposts from '../Blogposts/Blogposts'


const NoFilterBlogList = ({blue_page}) => {
  return (
    <div className={`${styles.no_filter_blog_list} ${blue_page?styles.blue_page:styles.white_page}`}>
      <Blogposts size={'big'}/>
      <ChangePageButton />
    </div>
  )
}

export default NoFilterBlogList