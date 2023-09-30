// import { Modal } from '../modal/Modal';
import Link from "next/link";
import styles from "./header.module.css"

export const Header = () => {
  
 
  return (
    <header className={styles.header}>
      <div className={styles.div_header1}>
        <Link href={"/"}><h2 className={styles.moviehub}>MovieHUB</h2></Link>
      </div>
      <div className={styles.div_header2}></div>
      <div className={styles.div_header3}>
      
       {/* <Modal/> */}
      </div>
     
    </header>
  );
};
