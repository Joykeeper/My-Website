import styles from './LinksImages.module.css'

import Image from 'next/image'
import Link from 'next/link'

const LinksImages = ({links}) => {

  /*Logic for providing right icon for each link name*/
  let links_list = links?.map(([website, value]) => (
    <Link href={value}><Image src={`/photos/LinksToProject/${website}.png`} alt={`${website}`} width={80} height={80} /></Link>
  ))
  
  return (
    <div className={styles.links_images}>
        <p>Links to project</p>
        <div className={styles.photos_of_links}>
          {links_list}
        </div>
    </div>
  )
}

export default LinksImages