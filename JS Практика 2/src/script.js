//1
const age = document.querySelector('#inputAge')
const result1 = document.querySelector('#resultFirstExecise')

function getAge(arg1) {
    arg1++;
    return arg1.toString();
}

age.addEventListener("input", () => {
    if (getAge(age.value)>0 && getAge(age.value)<101) {
        result1.textContent = getAge(age.value)
    } else {
        result1.textContent = "???"
    }   
}) 

//2
const number1 = document.querySelector('#inputNumb1')
const number2 = document.querySelector('#inputNumb2')
const result2 = document.querySelector('#resultSecondExecise')

function getRemainder(arg1, arg2) {
    return (arg1/arg2).toString();
}

(number1 && number2).addEventListener("input", () => {
    result2.textContent = getRemainder(number1.value, number2.value)
}) 

//3
const age2 = document.querySelector('#inputAge2')
const result3 = document.querySelector('#resultThirdExecise')

function faceControl(arg1) {
    return arg1.toString();
}

age2.addEventListener("input", () => {
    if (faceControl(age2.value)>17) {
        result3.textContent = "Welcome"
    } else {
        result3.textContent = "Отказ"
    }   
}) 

//4
const age3 = document.querySelector('#inputAge3')
const result4 = document.querySelector('#resultFourthExecise')
function getNextAge(arg1) {
    arg1++;
    return arg1.toString();
}
result4.textContent = "0"
age3.addEventListener("input", () => {
    if (getNextAge(age3.value)>1 && getNextAge(age3.value)<100) {
        result4.textContent = getNextAge(age3.value)
    } else if (getNextAge(age3.value)>100){
        result4.textContent = "tooOld"
    } else if(getNextAge(age3.value)<1) {
        result4.textContent = "???"
    } else {
        result4.textContent = "0"
    }   
}) 

//5
const height = document.querySelector('#inputHeight')
const result5 = document.querySelector('#resultFifthExecise')

function canRide(arg1) {
    return arg1 >= 140;
}

height.addEventListener("input", () => {
    result5.textContent = canRide(height.value)
}) 

$(".btn1").click(function(){
    $(".opt1").toggle('show')
})