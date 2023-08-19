import styles from './Project.module.css'

import DescToolsLinks from './ProjectComponents/DescToolsLinks'
import Image from 'next/image'

const Project = ({name, description, tools, links, even=false}) => {
  return (
    <div className={`${styles.project} ${even ? styles.colors_even:styles.colors_odd}`}>
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <DescToolsLinks description={description} tools={tools} links={links} even={even}/>
        <div className={styles.project_images}>
            <Image src={'/photos/project.png'} alt={name} width={357} height={291}/>
            <Image src={'/photos/project.png'} alt={name} width={357} height={291}/>
            <Image src={'/photos/project.png'} alt={name} width={357} height={291}/>
        </div>
    </div>
  )
}

export default Project