import React from 'react';
import Header from '../components/Header';
import Futor from '../components/Futor';
import Reviews from '../components/Reviews';
import reviews from '../utils/reviews';
import styles from '../styles/pages/Main.module.scss';

const ProductPage = () => {

  return (
    <div className={styles.main} >
      <Header />
      <Reviews reviews={reviews} />
      <Futor />
    </div>
  );
};
export default ProductPage;