//First problem solution is given below......

function mindGame(positiveNumber) {
    const multiplication = positiveNumber * 3;
    const summation = multiplication + 10;
    const division = summation / 2;
    const result0 = division - 5;

    // console.log(result0);

    return result0;
}

const givenNumber = 50;
const sendNumber = mindGame(givenNumber);

// //second problem is given below......


function evenOdd(evenOrOdd) {
    const result1 = evenOrOdd.length;
    if (result1 % 2 == 0) {
        // console.log('even');
    }
    else {
        // console.log('odd');
    }
}
const givenString = 'Batch-7';
const sendString = evenOdd(givenString);


//third problem solution is given below......

function isLGSeven(parameter) {
    let difference = parameter - 7;
    let doubleOFInput = parameter *2;
    if (difference < 7) {
        // console.log(difference);

        return difference;
    }

    else {
        // console.log(doubleOFInput);

        return doubleOFInput;
    }
}
const givenValue = 15;
const sendValue = isLGSeven(givenValue);


//fourth problem solution is given below......

function findingBadData(data) {
    let badData = [];
    for (let i = 0; i < data.length; i++) {
        let elements = data[i];
        if (elements < 0) {
            badData.push(elements);
        }
    }
    if (badData.length > 0) {
        // console.log(badData.length);

        return badData.length;
    }
    
    
}

const dataList = [2, 5, 7, -13];
const result = findingBadData(dataList);



//fifth problem solution given below......

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    const firstFriendDiamond = firstGem * 21;
    const secondFriendDiamond = secondGem * 32;
    const thirdFriendDiamond = thirdGem * 43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond +    thirdFriendDiamond;

    let existingDiamond = totalDiamond - 2000;
    if (totalDiamond > 1000*2) {
        // console.log(existingDiamond);

        return existingDiamond;

    }
    else{
        // console.log(totalDiamond);
        
        return totalDiamond;
    }
}
const firstGem = 20;
const secondGem = 200;
const thirdGem = 50;
const sendGem = gemsToDiamond(firstGem, secondGem, thirdGem);