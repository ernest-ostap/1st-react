import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.all}>
      <div className={styles.NavBar}>
        <button className={styles.button}>
          <a href="#" className={styles.link}>HomePage</a>
        </button>
        <button className={styles.button}>
          <a href="#" className={styles.link}>Game</a>
        </button>
        <button className={styles.button}>
          <a href="#" target="_blank" className={styles.link}>Leaderboard</a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
