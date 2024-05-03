'use client'

import styles from './Project.module.css'

import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";

import { useState, useEffect } from "react"
import {ref, getStorage, getDownloadURL, listAll} from "firebase/storage";

import DescToolsLinks from './ProjectComponents/DescToolsLinks'
import Image from 'next/image'

const Project = ({project, even=false}) => {
  const [imgArr, setImgArr] = useState([]);

  useEffect(()=>{ 
    const getImages = async () => {
      const imgListRef = ref(getStorage(), `images/projects/projectPhotos/${project.name.replace(' ', '').toLowerCase()}/`)
      listAll(imgListRef).then((res)=>{
        const promises = res.items.map((itemRef) => getDownloadURL(itemRef));
        Promise.all(promises).then((response) => {
          setImgArr(response)
        })
      })
    }
    getImages();
  }, [])


  return (
    <div className={`${styles.project} ${even ? styles.colors_even:styles.colors_odd}`}>
        <h1>{project.name.charAt(0).toUpperCase() + project.name.slice(1)}</h1>
        <DescToolsLinks description={project.description}
                        tools_used={project.toolsUsed} 
                        links={project.linksToProject} 
                        even={even}/>
        <div className={styles.project_images}>
          {
            imgArr.map(imgUrl=>{
              return <div className={styles.project_image}><Image src={imgUrl} alt={project.name} layout='fill' objectFit='contain'/></div>
            })
          }
        </div>
    </div>
  )
}

export default Project