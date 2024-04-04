const buttons = document.querySelector('.buttons')
const result = document.getElementById('result');

let input = "";
buttons.addEventListener('click', (e) => {

    
    let target = e.target;

    console.log(target);

    if(target.className != 'buttons'){

        if (target.className === 'equal') {
            let operation = eval(input);
    
            input = String(operation)
            result.textContent = operation;
        } else if (
            (input.slice(input.length - 1)=='-'||input.slice(input.length-1)==="+" || input.slice(input.length - 1)=== '*') && 
             (target.textContent == '-' ||target.textContent == '+' || target.textContent === "*" )
            ) {
            console.log('contains -');
            input = result.textContent;
        }else {
            input += target.textContent;
        }
        result.textContent = input;
     
    }

})


