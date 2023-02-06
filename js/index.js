//First problem is given below......

function mindGame(positiveNumber) {
    const multiplication = positiveNumber * 3;
    const summation = multiplication + 10;
    const division = summation / 2;
    const result0 = division - 5;
    console.log(result0);

    return result0;
}

const givenNumber = 33;
const sendNumber = mindGame(givenNumber);

//second problem is given below......


function evenOdd(evenOrOdd) {
    const result1 = evenOrOdd.length;
    if (result1 % 2 == 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}
const givenString = 'Batch-7';
const sendString = evenOdd(givenString);


//third problem is given below......

function isLGSeven(parameter) {
    let difference = parameter - 7;
    let doubleOFInput = parameter *2;
    if (difference < 7) {
        console.log(difference);

        return difference;
    }

    else {
        console.log(doubleOFInput);
        
        return doubleOFInput;
    }
}
const givenValue = 15;
const sendValue = isLGSeven(givenValue);