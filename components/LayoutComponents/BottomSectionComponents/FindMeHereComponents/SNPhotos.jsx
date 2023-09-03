import styles from './SNPhotos.module.css'

import Image from 'next/image'
import Link from 'next/link'

const SNPhotos = () => {
  return (
    <div className={styles.snphotos}>
      <Link href='/reddit'><Image src={'/photos/BottomSection/reddit.png'} alt={'reddit'} width={80} height={80} /></Link>
      <Link href='/reddit'><Image src={'/photos/BottomSection/telegram.png'} alt={'telegram'} width={80} height={80} /></Link>
      <Link href='/reddit'><Image src={'/photos/BottomSection/instagram.png'} alt={'instagram'} width={80} height={80} /></Link>
      <Link href='/reddit'><Image src={'/photos/BottomSection/linkedIn.png'} alt={'linkedIn'} width={80} height={80} /></Link>
      <Link href='/reddit'><Image src={'/photos/BottomSection/x.png'} alt={'x'} width={80} height={80} /></Link>
      <Link href='/reddit'><Image src={'/photos/BottomSection/github.png'} alt={'github'} width={80} height={80} /></Link>
    </div>
  )
}

export default SNPhotos