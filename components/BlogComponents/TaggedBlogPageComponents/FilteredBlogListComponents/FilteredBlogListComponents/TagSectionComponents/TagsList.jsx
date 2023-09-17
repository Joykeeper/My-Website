import styles from './TagsList.module.css'
import TagButton from './TagsListComponents/TagButton'

const TagsList = ({tags, choose_tag}) => {

  let tags_list = Object.keys(tags).map((name, i) =>{
    let setTag = () =>{
      let newTags = {...tags};
      newTags[name] = !newTags[name]
      choose_tag({...newTags});
    }

    return <TagButton tag_name={name} active={tags[name]} choose_tag={setTag}/>
  })

  return (
    <div className={styles.tags_list}>
        {tags_list}
    </div>
  )
}

export default TagsList

/*<TagButton tag_name={'Webdesign'} active={false}/>
        <TagButton tag_name={'Database'} active={false}/>
        <TagButton tag_name={'React'} active={false}/>
        <TagButton tag_name={'Scraping'} active={true}/>
        <TagButton tag_name={'Python'} active={true}/>
        <TagButton tag_name={'C++'} active={false}/>
        <TagButton tag_name={'Java'} active={true}/>
        <TagButton tag_name={'JS'} active={false}/>
        <TagButton tag_name={'Gamedev'} active={true}/>
        <TagButton tag_name={'Else'} active={true}/>
        <TagButton tag_name={'Other'} active={true}/>*/