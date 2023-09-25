import { WINNER_COMBOS } from "../components/constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
  //revisamos si hay un empate
  //chequeando que no hayan espacios vacíos en el tablero
  return newBoard.every((square) => square !== null) 
}