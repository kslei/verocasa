import React from "react";
import styles from '../styles/components/ToCatalog.module.scss';

const ToCatalog = () => {

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.block__text}>
          <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
          <div className={styles.block__text_description}>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</div>
          <button>До каталогу</button>
        </div>
        <div className={styles.block__image}>
          <img src="/ToCatalog.png" alt="photo-to_catalog" />
        </div>
      </div>
      
    </div>
  )
}
export default ToCatalog;