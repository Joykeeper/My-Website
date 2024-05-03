'use client'

import styles from './ToolsImages.module.css'

import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { useState, useEffect } from "react"
import {ref, getStorage, getDownloadURL} from "firebase/storage";

import Image from 'next/image'

const ToolsImages = ({tools_used, even}) => {

  const [imgArr, setImgArr] = useState([]);

  let tools_list = Object.values(tools_used)

  useEffect(()=>{ 
    const getImages = async () => {
      const promises = tools_list.map((tool) => {
       return getDownloadURL(ref(getStorage(), `images/projects/toolsUsed/${tool}.png`))
      })
      Promise.all(promises).then((response) => {
        console.log(response)
        setImgArr(response)
      })
    }
    getImages();
  }, [])

  return (
    <div className={`${styles.tools_images} ${even ? styles.colors_even : styles.colors_odd}`}>
        <p>Tools used</p>
        <div className={styles.photos_of_tools}>
            {
              imgArr.map((url)=>{
                return <Image src={url} alt={`tool`} width={80} height={80} />
              })
            }  
        </div>
    </div>
  )
}

export default ToolsImages