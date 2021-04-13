var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var playerpoints = 0;
var cpupoints = 0;


document.getElementById("rock").onclick = playerchoosedrock;
document.getElementById("paper").onclick = playerchoosedpaper;
document.getElementById("scissors").onclick = playerchoosedscissors;



function cpuchoosed(){
    var randomnum = Math.random();
    var cpupick = "paper";
    if (randomnum < .33){
        cpupick = "rock";
    }
    else if (randomnum > .66){
        cpupick = "scissors";
    }
    return cpupick;
}
function winning(playerwep, cpupick){
    if(playerwep == cpupick){
        document.getElementById("winning").innerHTML = "It's a tie !"
    }

    else if(playerwep == "rock" && cpupick == "paper"){
        document.getElementById("winning").innerHTML = "CPU wins !"
    }

    else if(playerwep == "scissors" && cpupick == "rock"){
        document.getElementById("winning").innerHTML = "CPU wins !"
    }

    else if(playerwep == "paper" && cpupick == "scissors"){
        document.getElementById("winning").innerHTML = "CPU wins !"
    }

    else if(playerwep == "rock" && cpupick == "scissors"){
        document.getElementById("winning").innerHTML = "Player wins !"
    }

    else if(playerwep == "scissors" && cpupick == "paper"){
        document.getElementById("winning").innerHTML = "Player wins !"
    }

    else if(playerwep == "paper" && cpupick == "rock"){
        document.getElementById("winning").innerHTML = "Player wins !"
    }

}


function playerchoosedrock(){
    playerwep = "rock"
    document.getElementById("console").innerHTML = "you choosed " + rock;
    var cpupick = cpuchoosed();
    document.getElementById("consolecpu").innerHTML = "Cpu choosed " + cpupick;
    winning(playerwep, cpupick);
}

function playerchoosedpaper(){
    playerwep = "paper"
    document.getElementById("console").innerHTML = "you choosed " + paper;
    var cpupick = cpuchoosed();
    document.getElementById("consolecpu").innerHTML = "Cpu choosed " + cpupick;
    winning(playerwep, cpupick);
}

function playerchoosedscissors(){
    playerwep = "scissors"
    document.getElementById("console").innerHTML = "you choosed " + scissors;
    var cpupick = cpuchoosed();
    document.getElementById("consolecpu").innerHTML = "Cpu choosed " + cpupick;
    winning(playerwep, cpupick);
}
