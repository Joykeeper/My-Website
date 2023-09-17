"use client"

import styles from './ChangePageButton.module.css'

const ChangePageButton = ({set_page, cur_page, max_page}) => {

  const back = () =>{
    console.log("Lol");
    if (cur_page != 1) set_page(cur_page-1)
  }

  const forward = () =>{
    if (cur_page != max_page) set_page(cur_page+1)
  }

  return (
    <div className={styles.change_page_button}>
        <button onClick={back} className={styles.prev}>{'<'}</button>
        <div>{cur_page}/{max_page}</div>
        <button onClick={forward} className={styles.next}>{'>'}</button>
    </div>
  )
}

export default ChangePageButton