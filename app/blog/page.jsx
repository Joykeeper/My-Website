"use client"

import Heading from '@/components/Heading'
import BlogIntro from '@/components/BlogComponents/BlogIntro'
import TaggedBlogPage from '@/components/BlogComponents/TaggedBlogPage'
import RandomBlogsPage from '@/components/BlogComponents/RandomBlogsPage'

import { useState } from 'react'

const page = () => {

  const [booksBlogposts, setBooksBlogposts] = useState({
    0: "lol1", 1: "lol12", 2: "lol13", 3: "lol14",
    4: "lol11", 5: "lol41", 6: "lol5", 7:"lolk1",
    8: "lolsd11", 9: "loddal41", 10: "lodaal5", 11:"lddaolk1",
    12: "lodasl11", 13: "lol4asd1", 14: "lolsdd5", 15:"loasdlk1",
    16: "loldsa11", 17: "lolds41", 18: "lola5", 19:"losalk1"
  })
  const [techsBlogposts, setTechsBlogposts] = useState({
    0: "lol1", 1: "lol12", 2: "lol13", 3: "lol14",
    4: "lol11", 5: "lol41", 6: "lol5", 7:"lolk1",
    8: "lolsd11", 9: "loddal41", 10: "lodaal5", 11:"lddaolk1",
    12: "lodasl11", 13: "lol4asd1", 14: "lolsdd5", 15:"loasdlk1",
    16: "loldsa11", 17: "lolds41", 18: "lola5", 19:"losalk1"
  })
  const [otherBlogposts, setOtherBlogposts] = useState({
    0: "lol1", 1: "lol12", 2: "lol13", 3: "lol14",
    4: "lol11", 5: "lol41", 6: "lol5", 7:"lolk1",
    8: "lolsd11", 9: "loddal41", 10: "lodaal5", 11:"lddaolk1",
    12: "lodasl11", 13: "lol4asd1", 14: "lolsdd5", 15:"loasdlk1",
    16: "loldsa11", 17: "lolds41", 18: "lola5", 19:"losalk1"
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