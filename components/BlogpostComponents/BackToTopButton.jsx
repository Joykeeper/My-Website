"use client"

import styles from './BackToTopButton.module.css'
import Link from 'next/link';

import { useEffect } from 'react';

const BackToTopButton = () => {

    useEffect(()=>{
        const scroll = (event) => {
          console.log(window.scrollY)
        }
        window.addEventListener("scroll", scroll, false);
        return  () => window.removeEventListener("scroll", scroll, false);
      },[])
      
  return (
    <div id="top" className={styles.backToTopButton}>
        <Link href="#top" scroll={true}>^</Link>
    </div>
  )
}

export default BackToTopButton