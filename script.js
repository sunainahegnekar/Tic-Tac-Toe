let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=() => {
turn0 = true;
enabledboxes();
msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
box.addEventListener("click",() => {
   if(turn0){
    box.innerText="o";
    turn0=false;
   }
   else{
    box.innerText="x";
    turn0=true;
   }
   box.disabled=true;

   checkWinner();
})
})

const showWinner=(winner) =>{
msg.innerText = `Congratulatons,winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledboxes();
} 

const disabledboxes=() => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledboxes=() => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const checkWinner = () => {
for (let pattern of winPatterns){
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != ""){
        if(post1Val == post2Val && post2Val == post3Val){
            console.log("Winner",post1Val);
        
            showWinner(post1Val);
        }
}
}

}

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
