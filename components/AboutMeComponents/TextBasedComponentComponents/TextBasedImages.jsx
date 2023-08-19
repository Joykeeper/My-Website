import styles from './TextBasedImages.module.css'

import Image from 'next/image'

const TextBasedImages = () => {
  return (
    <div className={styles.text_based_images}>
      <Image className={styles.bottom} src={'/photos/books.png'} alt={'books'} width={357} height={277}/>
      <Image className={styles.top} src={'/photos/books.png'} alt={'books'} width={357} height={277}/>
      <Image className={styles.bottom} src={'/photos/books.png'} alt={'books'} width={357} height={277}/>
    </div>
  )
}

export default TextBasedImages