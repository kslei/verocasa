import React, { useState } from "react";
import styles from '../styles/components/SearchPanel.module.scss';

const SearchPanel = () => {
const [search, setSearch] = useState('')

  return (
    <div className={styles.panel}>
      <input type="text" name='search' value={search} onChange={e => setSearch(e.target.value)} placeholder='' className={styles.input}/>
      <div className={styles.search}></div>
      <div className={styles.heart}></div>
      <div className={styles.bag}></div>
    </div>
  )
}
export default SearchPanel;