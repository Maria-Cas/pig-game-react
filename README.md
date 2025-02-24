## Iniciamos proyecto en react
- npm create vite@latest pig-game-react
- cd pig-game-react
- npm install
- npm run dev
- npm run build
- npm run deploy



## Crear el package.json


## Informacion 

// 1. Utilizamos useState para definir las variables de estado necesarias: activePlayer, score, current y diceNumber.
// 2. Creamos funciones para gestionar los eventos de los botones: handleNewGame, handleRollDice y handleHold.
// 3. Pasamos estas variables de estado y funciones como props a los componentes Player y Dice.
// 4. Nos encargamos de manejar los eventos de clic en los botones "New Game", "Roll Dice" y "Hold".
// 5. Implementamos la lógica para cambiar la imagen del dado cada vez que se haga clic en el botón "Roll Dice".
// 6. Modificamos el jugador activo cuando se haga clic en el botón "Hold".
// 7. Cambiamos el jugador activo si se obtiene un 1 al hacer clic en el botón "Roll Dice".
// 8. Cambiamos el jugador activo si se obtiene un 6 al hacer clic en el botón "Roll Dice".
// 9. Actualizamos el jugador activo cuando se obtiene cualquier otro número diferente a 1 o 6 al hacer clic en el botón "Roll Dice".
// 10. Implementamos la lógica para reiniciar el juego y restablecer los estados cuando se haga clic en el botón "New Game".