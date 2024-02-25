import { useState } from "react";


function Square ({value, onSquareClick}){

  return <button  onClick={onSquareClick} className="square">{value}</button>;

};


export default function App() {

  const [whoNext, setWhoNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(''))
  
  function HandleClick(i) {

    if(calculateWinner(squares) || squares[i]){
      return;
    }

    const nextSquare = squares.slice();

    nextSquare[i] = whoNext ? 'X' : 'O'
    
    setSquares(nextSquare)
    setWhoNext(!whoNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = winner + " Is The Winner";
  } else{
    status = (whoNext ? "X" : "O") + ' TURN!'
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => {HandleClick(0)}} />
        <Square value={squares[1]} onSquareClick={() => {HandleClick(1)}} />
        <Square value={squares[2]} onSquareClick={() => {HandleClick(2)}} />
        <Square value={squares[3]} onSquareClick={() => {HandleClick(3)}} />
        <Square value={squares[4]} onSquareClick={() => {HandleClick(4)}} />
        <Square value={squares[5]} onSquareClick={() => {HandleClick(5)}} />
        <Square value={squares[6]} onSquareClick={() => {HandleClick(6)}} />
        <Square value={squares[7]} onSquareClick={() => {HandleClick(7)}} />
        <Square value={squares[8]} onSquareClick={() => {HandleClick(8)}} />
      </div>

      <h2 className="winner">{status}</h2>

      <button className="refresh" onClick={ refreshPage }>New Game</button>

    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


function refreshPage() { 
  window.location.reload(); 

}