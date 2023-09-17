"use client"

import Heading from '@/components/Heading'
import BlogIntro from '@/components/BlogComponents/BlogIntro'
import TaggedBlogPage from '@/components/BlogComponents/TaggedBlogPage'
import RandomBlogsPage from '@/components/BlogComponents/RandomBlogsPage'

import { useState } from 'react'

const page = () => {

  const [booksBlogposts, setBooksBlogposts] = useState({
    0: ["w", ['Webdesign']], 1: ["w", ['Webdesign']], 
    2: ["o", ['Other']], 3: ["g", ['Gamedev']],
    4: ["w", ['Webdesign']], 5: ["o", ['Other']],
    6: ["j", ['Java']], 7: ["e", ['Else']],
    8: ["w", ['Webdesign']], 9: ["p", ['Python']],
    10: ["w", ['Webdesign']],
  })
  const [techsBlogposts, setTechsBlogposts] = useState({
    0: ["lol1", ['Webdesign']], 1: ["lol1", ['Webdesign']], 
    2: ["lol1", ['Other']], 3: ["lol1", ['Gamedev']],
    4: ["lol1", ['Webdesign']], 5: ["lol1", ['Other']],
    6: ["lol1", ['Webdesign']], 7: ["lol1", ['Else']]
  })
  const [otherBlogposts, setOtherBlogposts] = useState({
    0: ["lol1", []], 1: ["lol1", []], 
    2: ["lol1", []], 3: ["lol1", []],
    4: ["lol1", []], 5: ["lol1", []],
    6: ["lol1", []], 7: ["lol1", []],
    8: ["lol1", []], 9: ["lol1", []], 
    10: ["lol1", []], 11: ["lol1", []],
    12: ["lol1", []], 13: ["lol1", []],
    14: ["lol1", []], 15: ["lol1", []],
    16: ["lol1", []], 17: ["lol1", []], 
    18: ["lol1", []], 19: ["lol1", []],
    20: ["lol1", []], 21: ["lol1", []],
    22: ["lol1", []], 23: ["lol1", []],
    24: ["lol1", []], 26: ["lol1", []],
    26: ["lol1", []], 27: ["lol1", []],
  })

  return (
    <div>
        <Heading big_words={'Blog'} small_words={'The storage of my writings'} />
        <BlogIntro />
        <TaggedBlogPage heading={'Books'} blue_page={true} blogposts={booksBlogposts}/>
        <TaggedBlogPage heading={'Techs'} blue_page={false} blogposts={techsBlogposts}/>
        <RandomBlogsPage heading={'Other'} blogposts={otherBlogposts}/>
    </div>
  )
}

export default page