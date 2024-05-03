'use client'

import LeftTextRightPhoto from "@/components/AboutMeComponents/LeftTextRightPhoto"
import RightTextLeftPhoto from "@/components/AboutMeComponents/RightTextLeftPhoto"
import TextBasedComponent from "@/components/AboutMeComponents/TextBasedComponent"


import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { useState, useEffect } from "react"
import {ref as refDb, get, child, getDatabase} from "firebase/database";



const AboutMeContentComponent = () => {

    let [aboutme, setAboutMe] = useState('');
    let [myProjects, setMyProjects] = useState('');
    let [myBlog, setMyBlog] = useState('');
    let [newsletters, setNewsletters] = useState('');
  
    useEffect(()=>{
      async function fetchData(){
        const dbref = refDb(getDatabase())
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