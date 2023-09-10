import styles from './DescToolsLinks.module.css'

import LinksImages from './DescToolsLinksComponents/LinksImages'
import ToolsImages from './DescToolsLinksComponents/ToolsImages'

const DescToolsLinks = ({description, tools_used, links, even}) => {
  let desc = description?.map((paragraph)=><>{paragraph}<br/></>)
  return (
    <div className={styles.desc_tools_links}>
        <ToolsImages tools_used={tools_used} even={even}/>
        <p>{desc}</p>
        <LinksImages links={links}/>
    </div>
  )
}

export default DescToolsLinks