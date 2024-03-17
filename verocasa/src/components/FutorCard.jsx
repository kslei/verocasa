import React from 'react';
import styles from '../styles/components/FutorCard.module.scss';

const FutorCard = ({data}) => {
  
  return (
  <div className={styles.card}>
    <div className={styles.title}>{data.title}</div>
    {data.group.map(item => (
      <div key={item.id} className={styles.info}>{item.info}</div>
    ))}
  </div>
  );
};
export default FutorCard;