import styles from './BottomNavbar.module.css'

import Link from 'next/link'

const BottomNavbar = () => {
  return (
    <div className={styles.bottom_navbar}>
      <nav>
      <ul>
        <li>
          <Link href={'/aboutMe'}>Who am I?</Link>
        </li>
        <br/>
        <li>
          <Link href={'/projects'}>Projects</Link>
        </li>
        <br/>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <br/>
        <li>
          <Link href={'/newsletters'}>Newsletters</Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default BottomNavbar