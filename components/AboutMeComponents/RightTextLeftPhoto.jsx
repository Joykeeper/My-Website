'use client'

import styles from './RightTextLeftPhoto.module.css'

import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from "react"
import {ref, getStorage, getDownloadURL} from "firebase/storage";


const RightTextLeftPhoto = ({heading, text, ph_width, ph_height}) => {
  const [img, setImg] = useState('');

  const imgRef = ref(getStorage(), `images/aboutMe/${heading}.png`)

  useEffect(()=>{
   getDownloadURL(imgRef)
    .then((url) => {
      setImg(url);
    })
  }, [])
  
  return (
    <div className={styles.right_text_left_photo}>
      <Image src={img} alt={heading} width={ph_width} height={ph_height}/>
      <div>
        <h1>My {heading}</h1>
        <p>{text}</p>
        <div className={styles.link}><Link href={`/${heading}`}>Check out my {heading}</Link></div>
      </div>
    </div>
  )
}

export default RightTextLeftPhoto