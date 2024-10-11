
function calcAdd(a,b){
    return a + b;
}

function calcSub(a,b){
    return a - b;
}

function calcMulti(a,b){
    return a*b;
}

function calcDivide(a,b){
    return a/b;
}


function CalcMain (action){
    const first = parseFloat(document.getElementById("first").value);
    const second = parseFloat(document.getElementById("second").value);
    
    let result

    if(action ==='calcAdd'){
        result = calcAdd(first, second);

    } else if (action ==='calcSub'){
            result = calcSub(first, second);

    } else if (action ==='calcMulti'){
            result = calcMulti(first, second);

    } else if (action ==='calcDivide'){
        result = calcDivide(first, second);
        
    }
    
    document.getElementById('result').value =`${result}`;
}

