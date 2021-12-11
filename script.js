let currentScoreText = document.querySelector('#currentScoreText');
let highScoreTest = document.querySelector('#highScoreText')
let highscore = localStorage.getItem('highscore');
let clicks = 0;


if(highscore){
  highScoreTest.innerHTML = "high score: "+highscore;  
}


function increaseClicks(){
    clicks++;
    currentScoreText.innerHTML = clicks;
}

function saveScore(){
    if(clicks> highscore){
        highScoreTest.innerHTML = "high score: "+clicks;
        localStorage.setItem('highscore', clicks);

    }
}