"use client"

import styles from './NoFilterBlogList.module.css'

import ChangePageButton from '../ChangePageButton/ChangePageButton'
import Blogposts from '../Blogposts/Blogposts'

import { useState } from 'react'


const NoFilterBlogList = ({blogposts, blue_page}) => {

  const [page, setPage] = useState(1);

  let max_page = 1
  if (typeof blogposts == 'object'){
    let a = Object.entries(blogposts).length/12
    max_page = Math.floor(a) < a ? Math.floor(a)+1 : Math.floor(a)
  }

  return (
    <div className={`${styles.no_filter_blog_list} ${blue_page?styles.blue_page:styles.white_page}`}>
      <Blogposts size={12} page={page} blogposts={blogposts}/>
      <ChangePageButton set_page={setPage} cur_page={page} max_page={max_page}/>
    </div>
  )
}

export default NoFilterBlogList