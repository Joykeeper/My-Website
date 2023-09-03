import styles from './ChangePageButton.module.css'

const ChangePageButton = ({cur_page=1, max_page=10}) => {
  return (
    <div className={styles.change_page_button}>
        <button className={styles.prev}>{'<'}</button>
        <div>{cur_page}/{max_page}</div>
        <button className={styles.next}>{'>'}</button>
    </div>
  )
}

export default ChangePageButton