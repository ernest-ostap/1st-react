import HomePage from './components/views/HomePage';
import NavBar from './components/layout/NavBar';
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.All}>
      <div className={styles.site}>
        
          <NavBar />
        
          <HomePage />
                
      </div>
    </div>
    
  );
}

export default App;
