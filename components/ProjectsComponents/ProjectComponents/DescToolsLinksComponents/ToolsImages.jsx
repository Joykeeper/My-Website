import styles from './ToolsImages.module.css'

import Image from 'next/image'

const ToolsImages = ({tools, even}) => {
  return (
    <div className={`${styles.tools_images} ${even ? styles.colors_even : styles.colors_odd}`}>
        <p>Tools used</p>
        <div className={styles.photos_of_tools}>
            <Image src={'/photos/js.png'} alt={'js'} width={80} height={80} />
            <Image src={'/photos/mongo.png'} alt={'mongo'} width={80} height={80} />
            <Image src={'/photos/react.png'} alt={'react'} width={80} height={80} />
            <Image src={'/photos/express.png'} alt={'express'} width={80} height={80} />  
        </div>
    </div>
  )
}

export default ToolsImages