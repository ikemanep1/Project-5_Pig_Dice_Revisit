//---Business Logic
var player1 = new Player;
var player2 = new Player;

var throwDice = function() {
  return Math.floor(6*Math.random())+1;
}

function Player(turn){
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;

}


$(document).ready(function() {

  //---Player 1 Controls

$("button#playerRoll1").click(function(){
    var roll = throwDice();
    player1.roll = roll;
    if (roll === 1){
      this.tempScore = 0
      alert("You rolled a one!")
      player1.tempScore = 0;
      $("#turnScore1").text(player1.tempScore)
      $("#buttons1").toggle();
      $("#buttons2").toggle();
    }else{
      $("#rollOutcome1").text(player1.roll);
      player1.tempScore += roll;
      $("#turnScore1").text(player1.tempScore)
      if (player1.tempScore + player1.totalScore >= 100) {
        alert("Player 1: Winner Winner Chicken Dinner!");
        $("#rollOutcome1").text(player1.roll = 0);
        $("#turnScore1").text(player1.tempScore = 0);
        $("#playerScore1").text(player1.totalScore = 0);
        $("#rollOutcome2").text(player2.roll = 0);
        $("#turnScore2").text(player2.tempScore = 0);
        $("#playerScore2").text(player2.totalScore = 0);
        $("#buttons1").toggle();
        $("#buttons2").hide();
      }
    }
  });

  $("button#playerHold1").click(function(){
    player1.totalScore += player1.tempScore;
    $("#playerScore1").text(player1.totalScore);
    alert("Your turn is over! Player 2's turn!");
    player1.tempScore = 0;
    $("#turnScore1").text(player1.tempScore);
    $("#buttons1").toggle();
    $("#buttons2").toggle();
    $("#buttons1").hide();
    console.log(player1);
  });

  //---Player 2 Controls

  $("button#playerRoll2").click(function(){
    var roll = throwDice();
    player2.roll = roll;
    if (roll === 1){
      this.tempScore = 0
      alert("You rolled a one!")
      player2.tempScore = 0;
      $("#turnScore2").text(player2.tempScore)
      $("#buttons1").toggle();
      $("#buttons2").toggle();
    }else{
      $("#rollOutcome2").text(player2.roll);
      player2.tempScore += roll;
      $("#turnScore2").text(player2.tempScore)
      if (player2.tempScore + player2.totalScore >= 100) {
        alert("Player 2: Winner Winner Chicken Dinner!");
        $("#rollOutcome1").text(player1.roll = 0);
        $("#turnScore1").text(player1.tempScore = 0);
        $("#playerScore1").text(player1.totalScore = 0);
        $("#rollOutcome2").text(player2.roll = 0);
        $("#turnScore2").text(player2.tempScore = 0);
        $("#playerScore2").text(player2.totalScore = 0);
        $("#buttons1").toggle();
        $("#buttons2").hide();
      }
    }
  });

  $("button#playerHold2").click(function(){
    player2.totalScore += player2.tempScore;
    $("#playerScore2").text(player2.totalScore);
    alert("Your turn is over! Player 1's turn!");
    player2.tempScore = 0;
    $("#turnScore2").text(player2.tempScore);
    $("#buttons1").toggle();
    $("#buttons2").toggle();
    $("#buttons2").hide();
    console.log(player2);
  });
  //---New Game Button

  $("button#newGame").click(function(){
    $("#rollOutcome1").text(player1.roll = 0);
    $("#turnScore1").text(player1.tempScore = 0);
    $("#playerScore1").text(player1.totalScore = 0);
    $("#rollOutcome2").text(player2.roll = 0);
    $("#turnScore2").text(player2.tempScore = 0);
    $("#playerScore2").text(player2.totalScore = 0);
    $("#buttons1").toggle();
    $("#buttons2").hide();
    console.log();
  });
});
