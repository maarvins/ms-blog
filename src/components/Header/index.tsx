import {SignInButton} from "../SignInButton"
import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>MSBlog</h2>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
