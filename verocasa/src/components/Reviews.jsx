import React, { useState } from 'react';
import styles from '../styles/components/Reviews.module.scss';
import Pagination from './Pagination';
import ReviewCard from './ReviewCard';

const Reviews = ({reviews}) => {
  const [page, setPage] = useState(1)

  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h3>Відгуги наших клієнтів</h3>
          <Pagination amountInBlock={4} page={page} totalcount={11} setPage={setPage} />
        </div>
        <div className={styles.items}>
          {reviews && reviews.map(review => (
            <div key={review.id} >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reviews;