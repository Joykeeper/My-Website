import styles from './ToolsImages.module.css'

import Image from 'next/image'

const ToolsImages = ({tools_used, even}) => {

  /*Logic for using right icon for each tool name*/
  let tools_list = tools_used?.map((tool) => (
    <Image src={`/photos/ToolsUsed/${tool}.png`} alt={`${tool}`} width={80} height={80} />
  ))

  return (
    <div className={`${styles.tools_images} ${even ? styles.colors_even : styles.colors_odd}`}>
        <p>Tools used</p>
        <div className={styles.photos_of_tools}>
            {tools_list}  
        </div>
    </div>
  )
}

export default ToolsImages