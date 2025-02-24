import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState(0); // Jugadores 0 y 1
  const [score, setScore] = useState([0, 0]); // Puntuación de los jugadores
  const [current, setCurrent] = useState(0); // Puntaje temporal del jugador activo
  const [diceNumber, setDiceNumber] = useState(0); // Número del dado
  const [winner, setWinner] = useState(null); // Estado para el jugador ganador

  // Función para retener el puntaje actual del jugador activo
  const handleHold = () => {
    const newScore = [...score];
    newScore[activePlayer] += current; // Sumar el puntaje temporal al jugador activo
    setScore(newScore);

    // Verificar si un jugador ha ganado (alcanzado 100 puntos o más)
    if (newScore[activePlayer] >= 100) {
      setWinner(activePlayer); // Declara al jugador activo como ganador
      setDiceNumber(null); // Detener el dado
    } else {
      setActivePlayer(activePlayer === 0 ? 1 : 0); // Cambiar de jugador
      setCurrent(0); // Resetear el puntaje temporal
    }
  };

  // Función para iniciar un nuevo juego
  const handleNewGame = () => {
    setActivePlayer(0); // Jugador 0 empieza
    setScore([0, 0]); // Resetear puntajes
    setCurrent(0); // Resetear puntaje temporal
    setDiceNumber(0); // Resetear número del dado
    setWinner(null); // Limpiar el ganador
  };

  // Función para tirar el dado
  const handleRollDice = () => {
    if (winner !== null) return; // Si ya hay un ganador, no permitir tirar el dado

    setDiceNumber(Math.floor(Math.random() * 6) + 1); // Generar un número aleatorio entre 1 y 6
  };

  // Efecto que maneja el cambio de turno si el número del dado es 1
  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((prevActivePlayer) => (prevActivePlayer === 0 ? 1 : 0)); // Cambiar de jugador si el dado es 1
      setCurrent(0); // Resetear el puntaje temporal
    } else {
      setCurrent((prevCurrent) => prevCurrent + diceNumber); // Sumar el número del dado al puntaje temporal
    }
  }, [diceNumber]); // Este efecto se ejecuta cada vez que el número del dado cambia

  return (
    <main>
      {/* Jugador 1 */}
      <div className={`player ${activePlayer === 0 ? 'player--active' : ''} ${winner === 0 ? 'player--winner' : ''}`}>
        <div className="name">Player 1</div>
        <div className="score">{score[0]}</div>
        {activePlayer === 0 && winner === null && (
          <div className="current">
            <div className="current-label">Current</div>
            <div className="current-score">{current}</div>
          </div>
        )}
      </div>

      {/* Jugador 2 */}
      <div className={`player ${activePlayer === 1 ? 'player--active' : ''} ${winner === 1 ? 'player--winner' : ''}`}>
        <div className="name">Player 2</div>
        <div className="score">{score[1]}</div>
        {activePlayer === 1 && winner === null && (
          <div className="current">
            <div className="current-label">Current</div>
            <div className="current-score">{current}</div>
          </div>
        )}
      </div>

      {/* Mostrar la imagen del dado solo si se ha tirado */}
      {diceNumber > 0 && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}

      {/* Mostrar el mensaje de victoria si alguien gana */}
      {winner !== null && (
        <div className="winner-message">
          Player {winner + 1} wins! 🎉
        </div>
      )}

      {/* Botones para las acciones del juego */}
      <button className="btn btn--new" onClick={handleNewGame} disabled={winner !== null}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice} disabled={winner !== null}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold} disabled={winner !== null}>
        📥 Hold
      </button>
    </main>
  );
}

export default App;
