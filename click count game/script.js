let redDiv=document.getElementById("red")
let greenDiv=document.getElementById("green")
let yellowDiv=document.getElementById("yellow")

// redDiv.onclick=()=>console.log("you click red")
// greenDiv.onclick=()=>console.log("you click green")
// yellowDiv.onclick=()=>console.log("you click yellow")

const squares=document.querySelectorAll(".colorsquare")
//console.log(square)
//console.log(squares[1].value)
const timesClick={'red':0,'yellow':0,'green':0}
//foeEach
squares.forEach(square =>{square.onclick=()=>{
  timesClick[square.value]+=1
  square.innerText=timesClick[square.value]
  //console.log(square.value)
}
})
const clearGameBtn=document.getElementById("clear-game")

function clearScore(){
  timesClick.red=0
  timesClick.yellow=0
  timesClick.green=0
  squares.forEach(square=>{
    square.innerText=''
  })
}
clearGameBtn.onclick=()=>clearScore()