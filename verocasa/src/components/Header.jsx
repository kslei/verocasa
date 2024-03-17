import React from "react";
import styles from '../styles/components/Header.module.scss';
import NavMenu from "./NavMenu";
import SearchPanel from "./SearchPanel";

const Header = () => {
  
  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <a href="tel: +380989000909" ><div className={styles.link}>098 900 09 09</div></a>
            <div className={styles.link}>Допомога</div>
          </div>
         <div className={styles.link}>Увійти / Зареєструватися</div>
        </div>
      </div>
      <div className={styles.header__nav}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>IGNAT</div>
          <NavMenu theme='white'/>
          <SearchPanel />
        </div>
      </div>
    </div>
  )
}
export default Header;