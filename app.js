let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;//playerx,playery

let winpatterns=[
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6]
];
const resetgame=()=>{
  turnO=true;
  enableboxes();
  msgcontainer.classList.add("hide");
  

}

boxes.forEach((box) => {
  box.addEventListener("click",() =>{
   
   if(turnO){//playerO
    box.innerText="O";
    turnO=false;
    box.style.color="red";
   }
   else{//playerX
    box.innerText="X";
    turnO=true;
    box.style.color="blue";
   }
  
   box.disabled=true;

   checkWinner();
  });
});
const disableboxes =()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableboxes =()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
}
const showWinner=(winner)=>{
  msg.innerText=`congratulations, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
}

const checkWinner = ()=>{
  for(let patterns of winpatterns){
    let pos1Val=boxes[patterns[0]].innerText;
     let pos2Val= boxes[patterns[1]].innerText;
      let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val !=""&& pos2Val !="" &&pos3Val!=""){
         if(pos1Val===pos2Val&&pos2Val===pos3Val){
          console.log("winner",pos1Val);
          showWinner(pos1Val);
         } 
        }
 }
}

newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)
