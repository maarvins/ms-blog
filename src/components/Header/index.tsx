import styles from "./styles.module.scss"

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2>MSBlog</h2>
        <nav>
          <a>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}
