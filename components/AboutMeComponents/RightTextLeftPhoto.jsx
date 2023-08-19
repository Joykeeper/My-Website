import styles from './RightTextLeftPhoto.module.css'

import Image from 'next/image'

const RightTextLeftPhoto = ({heading, text, ph_width, ph_height}) => {
  return (
    <div className={styles.right_text_left_photo}>
      <Image src={`/photos/${heading}.png`} alt={heading} width={ph_width} height={ph_height}/>
      <div>
        <h1>My {heading}</h1>
        <p>{text}</p>
        <button>Check out my {heading}</button>
      </div>
    </div>
  )
}

export default RightTextLeftPhoto