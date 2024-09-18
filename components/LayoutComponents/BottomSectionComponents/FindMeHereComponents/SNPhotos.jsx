import styles from './SNPhotos.module.css'

import Image from 'next/image'
import Link from 'next/link'

const SNPhotos = () => {
  return (
    <div className={styles.snphotos}>
      <Link href='https://www.reddit.com/user/One-Speaker4776/'><Image src={'/photos/BottomSection/reddit.png'} alt={'reddit'} width={80} height={80} /></Link>
      <Link href='/telegram'><Image src={'/photos/BottomSection/telegram.png'} alt={'telegram'} width={80} height={80} /></Link>
      <Link href='/instagram'><Image src={'/photos/BottomSection/instagram.png'} alt={'instagram'} width={80} height={80} /></Link>
      <Link href='https://pl.linkedin.com/in/vladyslav-dovzhenko-4599b0252?trk=people-guest_people_search-card'><Image src={'/photos/BottomSection/linkedIn.png'} alt={'linkedIn'} width={80} height={80} /></Link>
      <Link href='/x'><Image src={'/photos/BottomSection/x.png'} alt={'x'} width={80} height={80} /></Link>
      <Link href='https://github.com/Joykeeper'><Image src={'/photos/BottomSection/github.png'} alt={'github'} width={80} height={80} /></Link>
    </div>
  )
}

export default SNPhotos