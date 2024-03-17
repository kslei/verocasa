import React from "react";
import styles from '../styles/components/Rating.module.scss';

const Rating = ({rating}) => {
  const rates = [
    { id: 0, rate: 1 },
    { id: 1, rate: 2 },
    { id: 2, rate: 3 },
    { id: 3, rate: 4 },
    { id: 4, rate: 5 },
  ]

  return (
    <div className={styles.rating}>
      {
      rates.map(rate=>(
        <div key={rate.id} className={styles.rate} style={{maskImage: rate.rate<=rating? "url('/star_active.svg')":"url('/star.svg')"}}></div>
      )) }
    </div>
  )
}
export default Rating;