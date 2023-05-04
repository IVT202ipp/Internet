//1
const result1 = document.querySelector('#resultFirstExecise')

function sumArray() {  
    arr1 = inputArr.value.trim().split(' ').map(v => +v);
    let sum = 0;
    arr1.forEach(function(elem) {
        sum = elem+sum;
    });
    result1.textContent = sum;
}


//2
const result2 = document.querySelector('#resultSecondExecise')

function getAboveZero() {
    arr1 = inputArr2.value.trim().split(' ').map(v => +v);
    let abovezero = arr1.filter(function(numb) {
        return numb > 0;
    })
    result2.textContent = abovezero;
}

//3
const result3 = document.querySelector('#resultThirdExecise')

function getPonies() {
    ponu = inputPoni.value;
    ponies = ["TwilightSparkle", "RainbowDash", "AppleJack", "Rarity", "Pinkie Pie", "Fluttershy"];
    let poni = ponies.find(function(pony) {
        return pony == ponu;
    })
    if(poni!=undefined) {
        result3.textContent = poni;
    } else {
        result3.textContent = "false";
    }
    
}


//4
const result4 = document.querySelector('#resultFourthExecise')

function isTxIncluded() {
    tx1 = inputTx.value;
    bk = ["0xaea0", "0x8f80", "0xf3ad", "0x17ec"];
    let tx2 = bk.find(function(txm) {
        return txm == tx1;
    })
    if(tx2!=undefined) {
        result4.textContent = "true";
    } else {
        result4.textContent = "false";
    }
}

//5
const result5 = document.querySelector('#resultFifthExecise')

function getSizes() {
    words = inputA.value.split(' ');
    const sizes = words.map(function(word) {
        let text = word;
        let siz = text.length;
        return siz;
    })
    result5.textContent = sizes;
}

//6
const result6 = document.querySelector('#resultSixthExecise')

function getWithSpaces() {
    words = inputA1.value.split(' ');
    const sizes = words.map(function(word) {
        let text = word;
        let siz = text.length;
        return siz;
    })
    let sum = 0;
    sizes.forEach(function(elem) {
        sum = elem+sum;
    });
    result6.textContent = words.join(" ")+", "+sum;
}

//8
const result7 = document.querySelector('#resultSeventhExecise')

function getEpisodes() {
    title = inputA2.value;
    ep = inputA3.value;
    result7.textContent = `Аниме ${title} включает ${ep} серий`;
}

//9
const result8 = document.querySelector('#resultEightExecise')

function triple() {
    a = inputNumber.value;
    const triples = (a) => {
        return a*3;
    }
    result8.textContent = triples(a);
}

//10
const result9 = document.querySelector('#resultNinthExecise')

function lol10() {
    lol = inputArrlol.value.trim().split(' ').map(v => +v);
    const getAvgGlucose = (arr1) => {
        let sum = 0;
        arr1.forEach(elem => {
        sum = elem+sum;
        });
        avg = sum/arr1.length;
        return avg;
    }
    result9.textContent = getAvgGlucose(lol);
}