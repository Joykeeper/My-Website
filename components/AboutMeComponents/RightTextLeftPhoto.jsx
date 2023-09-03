import styles from './RightTextLeftPhoto.module.css'

import Image from 'next/image'
import Link from 'next/link'

const RightTextLeftPhoto = ({heading, text, ph_width, ph_height}) => {
  return (
    <div className={styles.right_text_left_photo}>
      <Image src={`/photos/${heading}.png`} alt={heading} width={ph_width} height={ph_height}/>
      <div>
        <h1>My {heading}</h1>
        <p>{text}</p>
        <div className={styles.link}><Link href={`/${heading}`}>Check out my {heading}</Link></div>
      </div>
    </div>
  )
}

export default RightTextLeftPhoto