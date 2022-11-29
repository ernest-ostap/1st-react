import GameCore from '../features/GameCore';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.All}>
      <GameCore />
    </div>
  );
};

export default HomePage;
