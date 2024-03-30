'use client'

import LeftTextRightPhoto from "@/components/AboutMeComponents/LeftTextRightPhoto"
import RightTextLeftPhoto from "@/components/AboutMeComponents/RightTextLeftPhoto"
import TextBasedComponent from "@/components/AboutMeComponents/TextBasedComponent"


import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { useState, useEffect } from "react"
import {ref, set, get, update, remove, child, database, getDatabase} from "firebase/database";



const AboutMeContentComponent = () => {

    let [aboutme, setAboutMe] = useState('');
    let [myProjects, setMyProjects] = useState('');
    let [myBlog, setMyBlog] = useState('');
    let [newsletters, setNewsletters] = useState('');
  
    useEffect(()=>{
      async function fetchData(){
        const dbref = ref(getDatabase())
        get(child(dbref, "AboutMe")).then(snapshot=>{
          console.log(snapshot.val())
          setAboutMe(snapshot.val().whoami)
          setMyProjects(snapshot.val().myprojects)
          setMyBlog(snapshot.val().myblog)
          setNewsletters(snapshot.val().newsletters)
        })
      }
      fetchData()
    }, [])

/*const aboutme = 'My name is Vladyslav Dovzhenko. I am a Computer Science student in Polish-Japanese Academy of Information Technology in Warsaw. I was interested in IT since I was 8. Till today I have already tried myself in different branches such as Game Development, Web Development, AI and else. And they all seemed very appealing to me, so I’m still trying to decide which path should I choose. On this website you will find a lot of things about me, especially what I learn and create. Enjoy)'
  const myProjects = 'On this page I focus on things I have created. Here you will find my projects related to different branches of IT. Each project contains description and images, as well as the tools which were used to create it, such as programming language and libraries. Also, you will find links to the project itself (or its source-code).'
  const myBlog = 'To be honest I would like to learn how to write inspiringly. That’s why I decided to start blogging. Here you will find blogposts on different themes, but mostly on books I read and techs I learn. I do not only write commentaries on books and stories, but also create different tutorials on IT-related stuff. I am not a professional writer (who would have thought), but hope to improve in the future. That’s why I am always open to your constructive critique.'
  const newsletters = 'Well, this part is more like a little AI project. In here you will be able to subscribe for my newsletters which are generated by AI and related to various topics, such as history, biology, astronomy and else. How does it work? Well… So, with some prompt-engineering I managed to create articles about interesting facts and terminology connected to the chosen topic. I generate them twice a week and send them to the subscribers. You can treat it more like a beta-test, as I am still on my way to make the generated content worth reading. I hope to hear suggestions from you related to this AI project)'
  const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  */


  return (
    <>
        <TextBasedComponent text={aboutme}/>
        <LeftTextRightPhoto heading={'projects'} text={myProjects} ph_width={575} ph_height={501}/>
        <RightTextLeftPhoto heading={'blog'} text={myBlog} ph_width={563} ph_height={459}/>
        <LeftTextRightPhoto heading={'newsletters'} text={newsletters} ph_width={591} ph_height={555}/>
    </>
  )
}

export default AboutMeContentComponent