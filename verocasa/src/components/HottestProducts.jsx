import React, {useState} from 'react';
import styles from '../styles/components/HottestProducts.module.scss';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const HottestProducts = ({products}) => {
  const [page, setPage] = useState(1)
  
  return (
  <div className={styles.block}>
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Найгарячіші товари</h3>
        <Pagination amountInBlock={3} page={page} totalcount={9} setPage={setPage}/>
      </div>
      <div className={styles.items}>
        {products && products.map(product => (
          <div key={product.id} >
            <ProductCard product={product} />
          </div>  
        ))}
      </div>
    </div>
  </div>
  );
};
export default HottestProducts;