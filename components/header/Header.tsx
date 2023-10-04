import Link from "next/link";
import styles from "./header.module.css";
import { getSession } from "@auth0/nextjs-auth0";
import { Modal } from "../modal/Modal";

export const Header = async () => {
  const session = await getSession();
  console.log(session);
  return (
    <header className={styles.header}>
      <div className={styles.div_header1}>
        <Link href={"/"}>
          <h2 className={styles.moviehub}>MovieHUB</h2>
        </Link>
      </div>
      <div className={styles.div_header2}></div>
      <div className={styles.div_header3}>
        {!session ? (
          <a className={styles.btn_log} href="/api/auth/login">Login</a>
        ) : (
          <div className={styles.div_header3_div}>
            <a className={styles.div_header3_logout} href="/api/auth/logout">
              Logout
            </a>
            <a className={styles.div_header3_login} href="/moviepage">
              Movies Page
            </a>
            <Modal />
          </div>
        )}
      </div>
    </header>
  );
};
