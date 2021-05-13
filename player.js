class Player{
   constructor(){

   }
  getCount(){
      var playerCountRef=databse.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount=data.val();
      });
  }
  updateCount(count){
      database.ref('/').updte(
    {playerCount:count
     });

  }
  update(name){
    var playerIndex="player"+playerCount;
    database.ref(playerIndex).set({
        name:name
    });
  }
}