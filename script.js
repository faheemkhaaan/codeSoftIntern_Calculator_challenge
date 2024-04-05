const buttons = document.querySelector('.buttons')
const result = document.getElementById('result');

let input = "";
let calculation = ''
buttons.addEventListener('click', (e) => {

    
    let target = e.target;

    console.log(target);

    if(target.className != 'buttons'){

       

        if (target.className === 'equal') {
            if(target.textContent !== "AC" && result.textContent !== ''){
                console.log(input);
                calculation = eval(input);
            }
            
            console.log(calculation);
            input = String(calculation)
            result.textContent = input;
        } else if (
            (input.slice(input.length - 1)=='-'||input.slice(input.length-1)==="+" || input.slice(input.length - 1)=== '*' || input.slice(input.length - 1) === '.') && 
             (target.textContent == '-' ||target.textContent == '+' || target.textContent === "*" || target.textContent == '.')
            ) {
            console.log('contains -');
            input = result.textContent;
        }else {
            input += target.textContent;
        }
        result.textContent = input;

        if(target.textContent == 'AC'){
            result.textContent = '0'
            input = ''
        }
     
    }

})


