import styles from './FindMeHere.module.css'
import SNPhotos from './FindMeHereComponents/SNPhotos'

const FindMeHere = () => {
  return (
    <div className={styles.find_me_here}>
      <p>You can find me here:</p>
      <SNPhotos />
    </div>
  )
}

export default FindMeHere