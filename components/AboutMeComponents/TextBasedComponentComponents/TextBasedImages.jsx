'use client'

import styles from './TextBasedImages.module.css'

import Image from 'next/image'

import { useState, useEffect } from "react"
import {ref, getStorage, getDownloadURL, listAll} from "firebase/storage";



const TextBasedImages = () => {
  const [imgArr, setImgArr] = useState([]);

  useEffect(()=>{ 
    const getImages = async () => {
      const imgListRef = ref(getStorage(), `images/aboutMe/whoAmI/`)
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
    <div className={styles.text_based_images}>
      {
        imgArr.map(imgUrl=>{
          return <Image className={styles.bottom} src={imgUrl} alt={'books'} width={357} height={277}/>
        })
      }
    </div>
  )
}

export default TextBasedImages