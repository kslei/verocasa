import React from 'react';
import variables from '../styles/components/NavMenu.module.scss';
import styles from '../styles/components/NavMenu.module.scss';

const NavMenu = ({theme}) => {
  const menu = [
    { id: 0, name: 'новинки' },
    { id: 1, name: 'чоловіки' },
    { id: 2, name: 'жінки' },
    { id: 3, name: 'аксесуари' },
    { id: 4, name: 'акції' },
  ]
  let color
  theme === 'white' ? color = variables.black : color = variables.white

  return (
    <div className={styles.menu}>
      {menu.map(item => (
        <div key={item.id} className={styles.menu__item} style={{color: color}}>{item.name.toUpperCase()}</div>
      ))}
    </div>
  );
};
export default NavMenu;