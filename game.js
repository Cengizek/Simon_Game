
var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;



$(document).keypress(function(){
 if(!started){
        $("#level-title").text("Level " +level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currenLevel){
    if(gamePattern[currenLevel]===userClickedPattern[currenLevel]){
        console.log("Success");
        
        if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
        }
    }
    else{
        console.log("Wrong");
        playSound("wrong");

        $(".body").addClass("game-over");
        setTimeout(function(){
        $(".body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}


function startOver(){
level=0;
gamePattern=[];
started=false;
}



$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});





function nextSequence(){
     userClickedPattern=[];
   
    level++;
    $("#level-title").text("Level " +level);



    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio= new Audio("sounds/"+ name +".mp3");
    audio.play();
    
}


function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);

}
