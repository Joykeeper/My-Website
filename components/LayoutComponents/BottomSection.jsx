import styles from './BottomSection.module.css'
import BottomNavbar from './BottomSectionComponents/BottomNavbar'
import FindMeHere from './BottomSectionComponents/FindMeHere'
import Phrase from './BottomSectionComponents/Phrase'

const BottomSection = () => {
  return (
    <div className={styles.bottom_section}>
        <Phrase />
        <BottomNavbar />
        <FindMeHere />
    </div>
  )
}

export default BottomSection