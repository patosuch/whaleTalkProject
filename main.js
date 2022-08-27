// const input = 'turpentine and turtles';

// const vowels = ['A', 'EE', 'I', 'O', 'UU'];

// let resultArray = [];

// for (let i = 0; i < input.length; i++) {
//     const vowelCheck = input[i];
    
// //console.log(i, vowelCheck);

//    for (let j = 0; j < vowels.length; j++) {
//     const inputCheckVowel = vowels[j];

// //console.log(j,vowels);

//     if (input[i] === vowels[j])
//     resultArray.push(input[i]);
// //.push puts elements at the end of an array

// console.log(inp)
//    }
// }
        
    
// (STEP 1) what we are changing to whale talk
let input = 'tuprentine and turtles';

//(STEP 2) Array of letters to look for inside 'Input' string to convert 
// from normal speak to  whale speak
let vowels = ['a', 'e', 'i', 'o', 'u'];

//(STEP 3) Array to store vowels found inside of 'Input' string.  
// This will an empty array initially.
let resultArray = [];

//(STEP 4) Logic that compares 'Input' variable text to the 'vowels' array.  
// Goal is to find all the vowels inside the 'Input' string.  
// We will use a for loop
for (let i = 0; i < input.length; i++) {

//(STEP 5) CHECK the interator number (i) with log (21)
// console.log(i);


//(STEP 10/11) comparing if a input letter is an "e" or "u",
//if so, add(push) the letter to the end of the resultArray [] AGAIN!
//placed here so it performs this check once every letter in the input 
// IF places in the nested it will do it 5 more times. since are 5 vowels 
if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
    }

//(STEP 6) Nest Loop all 5 vowels through each letter in input array
  for (let j = 0; j < vowels.length; j++) {

//(STEP 7) CHECK the iterator number (j) with log (01234 times 21)
//  console.log(j);


//(STEP 8) comparing an input letter is the same as one of the vowels,
//if so, add(push) the letter to the end of resultArray []
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }   
  

//(STEP 9) CHECK to make sure its adding each similar letter to resultArray
//   console.log(resultArray);

    }

}

// (Step 12) Check the programs 
// Console.log(resultArray);

// (Step 13) create a resultString Variable, that joins together 
// the resultArray with no spaces and all UpperCase
var resultString = resultArray.join('').toUpperCase()

// (Step 14) Log the input whale version
console.log(resultString);
