import styles from './SNPhotos.module.css'
import Image from 'next/image'

const SNPhotos = () => {
  return (
    <div className={styles.snphotos}>
      <Image src={'/photos/reddit.png'} alt={'reddit'} width={80} height={80} />
      <Image src={'/photos/telegram.png'} alt={'telegram'} width={80} height={80} />
      <Image src={'/photos/instagram.png'} alt={'instagram'} width={80} height={80} />
      <Image src={'/photos/linkedIn.png'} alt={'linkedIn'} width={80} height={80} />
      <Image src={'/photos/x.png'} alt={'x'} width={80} height={80} />
      <Image src={'/photos/github.png'} alt={'github'} width={80} height={80} />
    </div>
  )
}

export default SNPhotos