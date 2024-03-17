import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import ToCatalog from '../components/ToCatalog';
import HottestProducts from '../components/HottestProducts';
import Actions from '../components/Actions';
import Reviews from '../components/Reviews';
import Futor from '../components/Futor';
import slides from '../utils/slides'
import products from '../utils/products';
import reviews from '../utils/reviews';
import styles from '../styles/pages/Main.module.scss';

const Main = () => {
  
  return (
  <div className={styles.main} >
    <Header />
    <Slider products={slides} />
    <ToCatalog />
    <HottestProducts products={products} />
    <Actions />
    <Reviews reviews={reviews} />
    <Futor />
  </div>
  );
};
export default Main;