'use client'

import styles from './LinksImages.module.css'

import FirebaseConfig from "@/components/FirebaseConfig/FirebaseConfig";
import { useState, useEffect } from "react"
import {ref, getStorage, getDownloadURL} from "firebase/storage";

import Image from 'next/image'
import Link from 'next/link'

const LinksImages = ({links}) => {

  /*Logic for providing right icon for each link name*/
  let links_list1 =  Object.values(links)?.map(([website, value]) => (
    <Link href={value}><Image src={`/photos/LinksToProject/${website}.png`} alt={`${website}`} width={80} height={80} /></Link>
  ))

  const [imgObj, setImgObj] = useState({});

  let linksArr = Object.keys(links);

  useEffect(()=>{ 
    const getImages = async () => {
      const promises = linksArr.map((website) => {
       return getDownloadURL(ref(getStorage(), `images/projects/linksToProject/${website}.png`))
      })

      Promise.all(promises).then((response) => {
        let o = {}
        for (let i = 0; i<linksArr.length; i++){
          o[linksArr[i]] = response[i];
          console.log(o);
          console.log(links['github'])
        }
        setImgObj(o)
      })
    }
    getImages();
  }, [])
  
  return (
    <div className={styles.links_images}>
        <p>Links to project</p>
        <div className={styles.photos_of_links}>
          {
            Object.keys(imgObj)?.map((website, i)=>{
              return <Link href={links[website]}><Image src={`/photos/LinksToProject/${website}.png`} alt={`${website}`} width={80} height={80} /></Link>
            })
          }
        </div>
    </div>
  )
}

export default LinksImages