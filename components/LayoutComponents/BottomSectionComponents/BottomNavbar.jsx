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
          <Link href={'/Projects'}>Projects</Link>
        </li>
        <br/>
        <li>
          <Link href={'/Blog'}>Blog</Link>
        </li>
        <br/>
        <li>
          <Link href={'/Newsletters'}>Newsletters</Link>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default BottomNavbar