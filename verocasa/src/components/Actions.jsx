import React from 'react';
import styles from '../styles/components/Actions.module.scss';

const Actions = () => {
  
  return (
  <div className={styles.actions}>
    <div className={styles.wrapper}>
      <div className={styles.data}>
        <div className={styles.data__title}><h2>Спіймай всі акції!</h2></div>
        <div className={styles.data__description}>Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D</div>
        <div className={styles.input}>
          <input type='text' name='actions' placeholder='введіть' />
          <button >Підписатись</button>
        </div>
        
      </div>
    </div>
    
    
  </div>
  );
};
export default Actions;