import styles from "./footer.module.css"

export const Footer = () => {

  return (
    <footer className={styles.footer}>
    <div className={styles.div_footer1}>
      <h2>© 2023 MovieHUB by Seo Moldes</h2>
    </div>
    <div className={styles.div_footer2}>
    <h2>Conditions of Use</h2>
    </div>
    <div className={styles.div_footer3}>
    <h2>Privacy & Policy</h2>
    </div>
    </footer>
  )
}
