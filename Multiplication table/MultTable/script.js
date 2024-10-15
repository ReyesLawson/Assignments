function MultOutput(){
    let inputValue= document.getElementById('inNum').value
    console.log{document.getElementById("inNum")}
    console.log {inputValue}

    for (let i=0 ; i<10 ; i++){
       let result = inputValue * i
       console.log {`${inputValue}${i}=${result}`}
       inputResult.innerHTML += `${inputValue} x ${i}= ${result}`
    }
}