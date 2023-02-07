// //First problem is given below......

// function mindGame(positiveNumber) {
//     const multiplication = positiveNumber * 3;
//     const summation = multiplication + 10;
//     const division = summation / 2;
//     const result0 = division - 5;
//     console.log(result0);

//     return result0;
// }

// const givenNumber = 33;
// const sendNumber = mindGame(givenNumber);

// //second problem is given below......


// function evenOdd(evenOrOdd) {
//     const result1 = evenOrOdd.length;
//     if (result1 % 2 == 0) {
//         console.log('even');
//     }
//     else {
//         console.log('odd');
//     }
// }
// const givenString = 'Batch-7';
// const sendString = evenOdd(givenString);


// //third problem is given below......

// function isLGSeven(parameter) {
//     let difference = parameter - 7;
//     let doubleOFInput = parameter *2;
//     if (difference < 7) {
//         console.log(difference);

//         return difference;
//     }

//     else {
//         console.log(doubleOFInput);

//         return doubleOFInput;
//     }
// }
// const givenValue = 15;
// const sendValue = isLGSeven(givenValue);


// //fourth problem is given below......

// function findingBadData(data) {
//     const goodData = [];
//     const badData = [];
//     for (let i = 0; i < data.length; i++) {
//         const index = i;
//         const elements = data[index];
//         if (elements < 0) {
//             badData.push(elements);
//             console.log(elements, ' :Bad Data,');

//         }
//         else if (elements >= 0) {
//             goodData.push(elements);
//             console.log(elements, ' :Good Data');
//         }
//     }
//     return badData;
// }
// const arrayOfData = [5, 10, 15, -4, -8, -12];
// const sendData = findingBadData(arrayOfData);

//fifth problem solution given below......

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    const firstFriendDiamond = firstGem * 21;
    const secondFriendDiamond = secondGem * 32;
    const thirdFriendDiamond = thirdGem * 43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

    let existingDiamond = totalDiamond - 2000;
    if (totalDiamond > 1000*2) {
        console.log(existingDiamond);

    }
    else{
        console.log(totalDiamond);
    }
}
const firstGem = 20;
const secondGem = 200;
const thirdGem = 50;
const sendGem = gemsToDiamond(firstGem, secondGem, thirdGem);