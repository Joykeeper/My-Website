import styles from './LinksImages.module.css'

import Image from 'next/image'
import Link from 'next/link'

const LinksImages = ({links}) => {
  return (
    <div className={styles.links_images}>
        <p>Links to project</p>
        <div className={styles.photos_of_links}>
          <Link href='/itch'><Image src={'/photos/itchio.png'} alt={'itchio'} width={80} height={80} /></Link> 
          <Link href='/github'><Image src={'/photos/githublink.png'} alt={'github'} width={80} height={80} /></Link> 
        </div>
    </div>
  )
}

export default LinksImages