import styles from './GameCore.module.scss';

const GameCore = () => {
  // komputer losuje liczbe z zakresu 1-3

  const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1) {
    
      return 'rock';
    } else if (randomNumber === 2) {
      return 'paper';
    } else return 'scissors';
  };



  // gracz wybiera papier, kamien, nozyce

  

  const gameLogic = (playerChoice) => {
    var wynik='a';
    const readyComputerChoice = computerChoice();
    console.log('playerChoice', playerChoice);
    console.log('readyComputerChoice', readyComputerChoice);
    var wybory='Twoj wybor to: ' + playerChoice + ', a wybor komputera to: ' + readyComputerChoice + ', zatem';
    
    if (playerChoice === readyComputerChoice) {
      console.log('remis');
      wynik=' REMIS ';     
    } else if (playerChoice === 'rock' && readyComputerChoice === 'scissors') {
      console.log('wygrales');
      wynik=' WYGRALES ';      
    } else if (playerChoice === 'scissors' && readyComputerChoice === 'paper') {
      console.log('wygrales');
      wynik=' WYGRALES ';
    } else if (playerChoice === 'paper' && readyComputerChoice === 'rock') {
      console.log('wygrales');
      wynik=' WYGRALES ';
    } else {
      console.log('przegrales');
      wynik=' PRZEGRALES :c ';
    }
    alert (wybory + wynik);
    
  };

  return (
    <div className={styles.buttonscontainer}>
      <button value='rock' onClick={(e) => gameLogic(e.target.value)} className={styles.buttonrock}>
        
      </button>
      <button value='paper' onClick={(e) => gameLogic(e.target.value)} className={styles.buttonpaper}>
        
      </button>
      <button value='scissors' onClick={(e) => gameLogic(e.target.value)} className={styles.buttonscissors}>
        
      </button>
    </div>
  );
};

export default GameCore;
