// console.log('hi Ambika')
let userInputEl = document.getElementById("input_user")
let idEl = document.getElementById("result")
// function  PrintUserEntry(){
//     console.log(userInputEl.value)
// }
function EvenOdd(){
    if(userInputEl.value === ''){
        alert("Please Provide a Valid Number!")
        return false
    }


    if(userInputEl.value % 2 === 0){
        idEl.innerHTML = "It's an Even Number"
    }else{
        idEl.innerHTML = "It's an Odd Number"
    }
}

