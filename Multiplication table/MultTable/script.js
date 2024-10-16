function Multiply(){
    let inputValue = document.getElementById("inNum").value
    let inputResult = document.getElementById("result")
    let inputResult2 = document.getElementById("outPut2")
    console.log (inputResult2)
    inputResult.value ="10"

    for (let i=0 ; i<=10 ; i++){
       let result = inputValue * i;
       inputResult.innerHTML += `${inputValue} x ${i} = ${result} <br>`
    }
}