function tournamentWinner(competitions, results) {
  // Write your code here.
  let winnerMap = {};
  let winnerTeam = "";

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      const awayTeamName = competitions[i][1];
      if (winnerMap.hasOwnProperty(awayTeamName)) {
        winnerMap[competitions[i][1]] = winnerMap[competitions[i][1]] + 1;
      } else {
        winnerMap[competitions[i][1]] = 1;
      }
    } else {
      const homeTeamName = competitions[i][0];
      if (winnerMap.hasOwnProperty(homeTeamName)) {
        winnerMap[competitions[i][0]] = winnerMap[competitions[i][0]] + 1;
      } else {
        winnerMap[competitions[i][0]] = 1;
      }
    }
  }

  let max = 0;
  for (let winningTeam in winnerMap) {
    if (winnerMap[winningTeam] > max) {
      max = winnerMap[winningTeam];
      winnerTeam = winningTeam;
    }
  }
  return winnerTeam;
}

tournamentWinner(
  [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ],
  [0, 0, 1]
);
