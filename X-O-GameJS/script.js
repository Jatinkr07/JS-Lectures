let cells = document.querySelectorAll(".cell");
let status = document.querySelector(".status");
let currentPlayer = "X",
  gameActive = true;

cells.forEach(
  (cell) =>
    (cell.onclick = () => {
      if (!cell.textContent && gameActive) {
        cell.textContent = currentPlayer;
        if (checkWin())
          (status.textContent = `Player ${currentPlayer} Wins!`),
            (gameActive = false);
        else if ([...cells].every((c) => c.textContent))
          (status.textContent = "It's a Tie!"), (gameActive = false);
        else
          (currentPlayer = currentPlayer === "X" ? "O" : "X"),
            (status.textContent = `Player ${currentPlayer}'s Turn`);
      }
    })
);

function checkWin() {
  return [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ].some(
    (p) =>
      cells[p[0]].textContent &&
      cells[p[0]].textContent === cells[p[1]].textContent &&
      cells[p[1]].textContent === cells[p[2]].textContent
  );
}

function resetGame() {
  cells.forEach((cell) => (cell.textContent = ""));
  currentPlayer = "X";
  gameActive = true;
  status.textContent = "Player X's Turn";
}
