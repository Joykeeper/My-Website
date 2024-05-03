'use client'

import styles from './LeftTextRightPhoto.module.css'

import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from "react"
import {ref, getStorage, listAll, getBytes, getBlob, getDownloadURL} from "firebase/storage";

const LeftTextRightPhoto = ({heading, text, ph_width, ph_height}) => {
  const [img, setImg] = useState('');

  const imgRef = ref(getStorage(), `images/aboutMe/${heading}.png`)

  useEffect(()=>{
   getDownloadURL(imgRef)
    .then((url) => {
      setImg(url);
    })
  },[])


  return (
    <div className={styles.left_text_right_photo}>
      <div>
        <h1>My {heading}</h1>
        <p>{text}</p>
        <div className={styles.link}><Link href={`/${heading}`}>Check out my {heading}</Link></div>
      </div>
      <Image src={img} alt={heading} width={ph_width} height={ph_height} loading="lazy"/>
    </div>
  )
}

export default LeftTextRightPhoto