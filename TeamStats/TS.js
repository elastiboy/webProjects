const team = {
  _players:[{
    firstName:'Jim', lastName: 'Halpert', age:28
  },
    { firstName: 'Pam', lastName: 'Beesley', age: 26
            
            },{
              firstName: 'Michael', lastName: 'Scott', age:37
            },
           ],
  _games:[
    
    {
      opponent:'TX', teamPoints:10, opponentPoints:5
    },
    {
      opponent:'LA', teamPoints:30, opponentPoints:25
    },
    {
      opponent:'RE', teamPoints:40, opponentPoints:45
    }
  ],
  get games(){
    return this._games;
    
  },
  get players(){
    return this._players;
  },
  addPlayer(firstName,lastName,age){
        let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opp,myPts,oppPts){
    const game ={
      opponent:opp,
      teamPoints:myPts,
      opponentPoints:oppPts
    }
    this.games.push(game);
  }
}
  team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
team.addGame("LA", 110, 88);
team.addGame("TX", 10, 58);
console.log(team.players);
console.log(team.games);
