"use client"

import FilteredBlogList from './FilteredBlogListComponents/FilteredBlogList'
import TagSection from './FilteredBlogListComponents/TagSection'
import styles from'./FilteredBlogSection.module.css'

import { useState } from 'react'

const FilteredBlogSection = ({blogposts, blue_page}) => {

  const [tags, setTags] = useState({"Webdesign":false, "Database": false, "React":false, "Scraping": false, "Python":false, "C++":false, "Java":false, "JS":false, "Gamedev":false, "Else":false, "Other":false});
  const [page, setPage] = useState(1);

  return (
    <div className={styles.filtered_blog_section}>
      <FilteredBlogList set_page={setPage} cur_page={page} blue_page={blue_page} blogs={blogposts}/>
      <TagSection tags={tags} choose_tag={setTags}/>
    </div>
  )
}

export default FilteredBlogSection