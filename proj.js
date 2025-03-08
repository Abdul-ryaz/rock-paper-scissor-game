let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");






const draw=()=>{
    console.log("game drawn");
    msg.innerText="Game is drawn";
    msg.style.backgroundColor="green";
    style=CaretPosition
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText=`congragulations,You Win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("you lose");
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`Oops, You Win ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const gencompchoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
  const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];   
}

const playGame=(userchoice)=>{
    console.log("user choice =",userchoice);
    //GENERATE COMPUTER CHOICE
    
    const compchoice=gencompchoice();
    console.log("computer choice =",compchoice);

    //checking the conditions
    if(userchoice===compchoice){
        //draw
        draw()
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
        //comp choice scissor and paper
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper"){
        //rock scissor
        userwin=compchoice==="scissors"?false:true;
    }
    else{//scissors
        //rock paper
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playGame(userchoice)
    });
});

