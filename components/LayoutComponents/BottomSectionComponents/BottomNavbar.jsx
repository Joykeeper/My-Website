import styles from './BottomNavbar.module.css'

const BottomNavbar = () => {
  return (
    <div className={styles.bottom_navbar}>
      <nav>
      <ul>
        <li>Who am I?</li>
        <br/>
        <li>Projects</li>
        <br/>
        <li>Blog</li>
        <br/>
        <li>Newsletters</li>
      </ul>
      </nav>
    </div>
  )
}

export default BottomNavbar