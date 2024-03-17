import React from "react";
import Rating from "./Rating";
import styles from '../styles/components/ReviewCard.module.scss';

const ReviewCard = ({review}) => {

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <img src={review.img} alt="user" />
        <div className={styles.title__info}>
          <Rating rating={review.rating}/>
          <div>{review.name}</div>
        </div>
      </div>
      <div className={styles.text}><p>{review.text}</p></div>
    </div>
  )
}
export default ReviewCard;