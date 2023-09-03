import styles from './LinksImages.module.css'

import Image from 'next/image'
import Link from 'next/link'

const LinksImages = ({links}) => {

  /*Dictionary for providing right link for each link name*/
  let link_to_site = {github: 'https://github.com/', itch: 'https://itch.io/'}

  /*Logic for providing right icon for each link name*/
  let links_list = links?.map((link) => (
    <Link href={link_to_site[link]}><Image src={`/photos/LinksToProject/${link}.png`} alt={`${link}`} width={80} height={80} /></Link>
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