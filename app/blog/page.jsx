"use client"

import Heading from '@/components/Heading'
import BlogIntro from '@/components/BlogComponents/BlogIntro'
import TaggedBlogPage from '@/components/BlogComponents/TaggedBlogPage'
import RandomBlogsPage from '@/components/BlogComponents/RandomBlogsPage'

import { useState } from 'react'

const page = () => {

  const [booksBlogposts, setBooksBlogposts] = useState({
    0: ["JavaScript", ['Webdesign']], 1: ["TypeScript", ['Webdesign']], 
    2: ["School", ['Other']], 3: ["New game", ['Gamedev']],
    4: ["JavaScript 2", ['Webdesign']], 5: ["Foreign country", ['Other']],
    6: ["Algorithms in Java", ['Java']], 7: ["Food", ['Else']],
    8: ["Next.js 15", ['Webdesign']], 9: ["Snake game", ['Python', 'Gamedev']],
    10: ["Figma usage", ['Webdesign']],
  })
  const [techsBlogposts, setTechsBlogposts] = useState({
    0: ["JavaScript", ['Webdesign']], 1: ["SPA", ['Webdesign']], 
    2: ["Rocket Science", ['Other']], 3: ["Wow a new game", ['Gamedev']],
    4: ["Nest.js", ['Webdesign']], 5: ["Auto Skiing", ['Other']],
    6: ["Webdesign", ['Webdesign']], 7: ["Healthy robot", ['Else']]
  })
  const [otherBlogposts, setOtherBlogposts] = useState({
    0: ["Unlocking Creative Potential", []], 1: ["The Power of Minimalism", []], 
    2: ["Mastering Time Management", []], 3: ["Starting Your Passion Project", []],
    4: ["Navigating Digital Trends", []], 5: ["How to Stay Motivated", []],
    6: ["The Future of Remote Work", []], 7: ["Building Better Habits", []],
    8: ["Exploring AI in Daily Life", []], 9: ["The Rise of Sustainable Tech", []], 
    10: ["Breaking Free from Routine", []], 11: ["Why Networking Matters", []],
    12: ["Harnessing Creativity in Business", []], 13: ["Maximizing Your Skillset", []],
    14: ["The Art of Problem Solving", []], 15: ["Living with Intentionality", []],
    16: ["Top Tools for Entrepreneurs", []], 17: ["Balancing Work and Wellness", []], 
    18: ["Making Ideas Stick", []], 19: ["The Secret to Lifelong Learning", []],
    20: ["Maximizing Your Skillset", []], 21: ["Harnessing Creativity in Business", []],
    22: ["Living with Intentionality", []], 23: ["Exploring AI in Daily Life", []],
    24: ["Mastering Time Management", []], 25: ["Unlocking Creative Potential", []],
    26: ["Building Better Habits", []], 27: ["The Future of Remote Work", []],
});

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