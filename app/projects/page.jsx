'use client'

import Heading from '@/components/Heading'
import Project from '@/components/ProjectsComponents/Project'

import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { useState, useEffect } from "react"
import {ref as refDb, get, child, getDatabase} from "firebase/database";

const page = () => {

  let [projects, setProjects] = useState({});
  useEffect(()=>{
      async function fetchData(){
        const dbref = refDb(getDatabase())
        get(child(dbref, "projects")).then(snapshot=>{
          console.log(snapshot.val())
          setProjects(snapshot.val())
        })
      }
      fetchData()
  }, [])

  return (
    <div>
        <Heading big_words={'Projects'} small_words={'The things I have made'}/>

        {
          Object.values(projects).map((project, i)=>{
            console.log(project)
            return <Project project={project} even={i%2!=0?true:false}/>
          })
        }

        
    </div>
  )
}

export default page