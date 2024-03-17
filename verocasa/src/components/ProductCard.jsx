import React from 'react';
import styles from '../styles/components/ProductCard.module.scss';

const ProductCard = ({product, key}) => {
  
  return (
  <div className={styles.card} key={key}>
    <div className={styles.heart}>
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.49992 15.162C8.26441 15.162 8.03651 15.1316 7.84659 15.0633C4.94457 14.0681 0.333252 10.5355 0.333252 5.31643C0.333252 2.65752 2.48317 0.5 5.1269 0.5C6.41077 0.5 7.61108 1.0014 8.49992 1.89783C9.38876 1.0014 10.5891 0.5 11.8729 0.5C14.5167 0.5 16.6666 2.66512 16.6666 5.31643C16.6666 10.5431 12.0553 14.0681 9.15325 15.0633C8.96333 15.1316 8.73542 15.162 8.49992 15.162ZM5.1269 1.63953C3.11372 1.63953 1.47279 3.28806 1.47279 5.31643C1.47279 10.5051 6.46395 13.3919 8.21883 13.9921C8.35558 14.0377 8.65186 14.0377 8.7886 13.9921C10.5359 13.3919 15.5346 10.5127 15.5346 5.31643C15.5346 3.28806 13.8937 1.63953 11.8805 1.63953C10.7258 1.63953 9.65465 2.17891 8.96333 3.11333C8.75062 3.40202 8.26441 3.40202 8.0517 3.11333C7.34519 2.17132 6.28162 1.63953 5.1269 1.63953Z" fill="#343434" />
        </svg>

    </div>
    <div className={styles.image}>
      <img src={product.img} alt='product-image' />
    </div>
    <div className={styles.name}><h4>{product.name}</h4></div>
    <div className={styles.info}>{product.info1}</div>
    <div className={styles.info}>{product.info2}</div>
    <div className={styles.price}>{product.price} грн.</div>
  </div>
  );
};
export default ProductCard;
