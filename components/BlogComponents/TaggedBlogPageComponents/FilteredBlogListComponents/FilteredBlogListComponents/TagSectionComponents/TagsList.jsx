import styles from './TagsList.module.css'
import TagButton from './TagsListComponents/TagButton'

const TagsList = ({tags}) => {
  return (
    <div className={styles.tags_list}>
        <TagButton tag_name={'Webdesign'} active={false}/>
        <TagButton tag_name={'Database'} active={false}/>
        <TagButton tag_name={'React'} active={false}/>
        <TagButton tag_name={'Scraping'} active={true}/>
        <TagButton tag_name={'Python'} active={true}/>
        <TagButton tag_name={'C++'} active={false}/>
        <TagButton tag_name={'Java'} active={true}/>
        <TagButton tag_name={'JS'} active={false}/>
        <TagButton tag_name={'Gamedev'} active={true}/>
        <TagButton tag_name={'Else'} active={true}/>
        <TagButton tag_name={'Other'} active={true}/>
    </div>
  )
}

export default TagsList