import styles from './LeftTextRightPhoto.module.css'

import Image from 'next/image'

const LeftTextRightPhoto = ({heading, text, ph_width, ph_height}) => {
  return (
    <div className={styles.left_text_right_photo}>
      <div>
        <h1>My {heading}</h1>
        <p>{text}</p>
        <button>Check out my {heading}</button>
      </div>
      <Image src={`/photos/${heading}.png`} alt={heading} width={ph_width} height={ph_height}/>
    </div>
  )
}

export default LeftTextRightPhoto