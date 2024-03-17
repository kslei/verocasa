import React from 'react';
import NavMenu from './NavMenu';
import futormenu from '../utils/futormenu';
import styles from '../styles/components/Futor.module.scss';
import FutorCard from './FutorCard';

const Futor = () => {
  
  return (
  <div className={styles.futor}>
    <div className={styles.futor__menu}>
      <div className={styles.wrapper}>
        {futormenu.map((item, i)=> (
          <div key={item.id} style={{marginRight: i===0? 100:0}}>
            <FutorCard data={item} />
          </div>
        ))
        }
      </div>
    </div>
    <div className={styles.futor__bottom}>
      <div className={styles.wrapper}>
        <NavMenu theme='dark'/>
        <div className={styles.copyright}>© 2022 — 2023 IGNAT. Усі права захищені.</div>
      </div>
    </div>
    
  </div>
  );
};
export default Futor;