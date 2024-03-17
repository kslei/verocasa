import React, { useState } from "react";
import variables from '../styles/components/Pagination.module.scss';
import styles from '../styles/components/Pagination.module.scss';

const Pagination = ({page, setPage, amountInBlock, totalcount}) => {
  const totalPages = Math.ceil(totalcount/amountInBlock)
  const onPage = (count) => {
    switch(true){
      case count<=1:
        setPage(1)
      break;
      case count>=totalPages:
        setPage(totalPages)
      break;
      default: setPage(count)
    }
  }
  let pageInd = page
  let total = totalPages
  if (pageInd<10) pageInd = `0${page}`
  if (total<10) total = `0${totalPages}`

  return (
    <div className={styles.pagination}>
      <h5>{pageInd} / {total}</h5>
    <div className={styles.frame}>
      <div className={styles.frame__prev} onClick={() => onPage(page - 1)} style={{backgroundColor: page===1? variables.black40: ''}}></div>
        <div className={styles.frame__next} onClick={() => onPage(page + 1)} style={{ backgroundColor: page === totalPages ? variables.black40 : ''}}></div>
    </div></div>
  )
}
export default Pagination;