var getStatistics = function (players) {
 let sum = 0;
 for( let i = 0; i<players.length; i++){
   sum += players[i].goals;
   }
   
  for( let i = 0; i<players.length; i++){
   players[i].coefficient = players[i].goals * 2 + players[i].passes;
   players[i].percent = Math.round(players[i].goals * 100 / sum);
   }
   return players;
};
