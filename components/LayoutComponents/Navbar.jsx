import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.bg}>
    <div className={styles.navbar}>
        <h1><i>Vladyslav Dovzhenko</i></h1>
        <nav>
            <ul>
                <li>Who am I?</li>
                <li>Projects</li>
                <li>Blog</li>
                <li>Newsletters</li>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Navbar