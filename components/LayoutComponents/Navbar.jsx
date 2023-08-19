import styles from './Navbar.module.css'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1><i>Vladyslav Dovzhenko</i></h1>
        <nav>
            <ul>
                <li>
                  <Link href="/aboutMe">Who am I?</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/newsletters">Newsletters</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar