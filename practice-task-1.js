// celcius to farenheit 

function celciusToFarenheit(celcius) {
    const farenheit = celcius * (9 / 5) + 32;
    return farenheit
}

console.log(celciusToFarenheit(30));



// creat a function for find any numbers in an array
function findNum(array) {
    let count5 = 0;
    for (const num of array) {
        num === 5 ? count5++ : null
    }
    return count5
}

console.log(findNum([5, 6, 11, 12, 98, 5, 5, 6, 5]));





// count vowels in a string

function countVowel(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const st of str) {
        vowel.includes(`${st}`) ? count++ : null;
    }

    return count
}

console.log(countVowel('aeiou eouia hjlkljdlkjflkdjlkj'));





// find longest number in a string

function longestWord(string) {
    const splitStr = string.split(' ');
    maxWord = splitStr[0];
    for (const str of splitStr) {
        str.length > maxWord.length ? maxWord = str : null;
    }

    return maxWord
}

console.log(longestWord('Borhan Uddin Taniiiimm'));





// Generate a random number between 10 to 20.

let random = Math.floor((Math.random() * 10 + 10));
console.log(random)