import styles from './DescToolsLinks.module.css'

import LinksImages from './DescToolsLinksComponents/LinksImages'
import ToolsImages from './DescToolsLinksComponents/ToolsImages'

const DescToolsLinks = ({text, tools, links , even}) => {
  return (
    <div className={styles.desc_tools_links}>
        <ToolsImages tools={tools} even={even}/>
        <p>{text}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <LinksImages links={links}/>
    </div>
  )
}

export default DescToolsLinks