document.querySelector("#btn").addEventListener("click" , function(){
  document.querySelector("h1").innerHTML = "Decision Dice";
  document.querySelector("#btn").innerHTML = "Decision in progress ...";
  var timeLeft = 3;
  var timer = setInterval(function(){
    if(timeLeft == 0)
    {
      clearInterval(timer);
      document.querySelector("#btn").innerHTML = "Again";

      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      var count = 0;
      while (randomNumber1 == randomNumber2 && count < 1000) {
        // Less likely to have draw condition: It should be a decider in 1 attempt in major cases
        // randomNumber1 = Math.floor(Math.random()*6) + 1;
        randomNumber2 = Math.floor(Math.random() * 6) + 1;
        count++;
      }
      //changing images according to random number , therefore concatenating image address path using random numbers
      document.querySelector(".img1").setAttribute("src", "images/dot" + randomNumber1 + ".png");
      document.querySelector(".img2").setAttribute("src", "images/dot" + randomNumber2 + ".png");
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = " 🚩 Player <div class = 'player-1'>1</div> Wins!";
      } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player <div class = 'player-2'>2</div> Wins! 🚩 ";
      } else {
        document.querySelector("h1").textContent = "Draw!";
        // DRAW
      }
    }
    else
    {
      document.querySelector("#btn").innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  } , 1000);
})
