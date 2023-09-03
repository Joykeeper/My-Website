import styles from './Project.module.css'

import DescToolsLinks from './ProjectComponents/DescToolsLinks'
import Image from 'next/image'

const Project = ({project, even=false}) => {
  return (
    <div className={`${styles.project} ${even ? styles.colors_even:styles.colors_odd}`}>
        <h1>{project.name.charAt(0).toUpperCase() + project.name.slice(1)}</h1>
        <DescToolsLinks description={project.description}
                        tools_used={project.tools_used} 
                        links={project.links} 
                        even={even}/>
        <div className={styles.project_images}>
          <Image src={`/photos/ProjectPhotos/${project.name}/1.png`} alt={project.name} width={357} height={291}/>
          <Image src={`/photos/ProjectPhotos/${project.name}/2.png`} alt={project.name} width={357} height={291}/>
          <Image src={`/photos/ProjectPhotos/${project.name}/3.png`} alt={project.name} width={357} height={291}/>
        </div>
    </div>
  )
}

export default Project