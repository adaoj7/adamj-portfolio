// function will take in a number between 1 and 3999 and return a string
// example: 1990 is MCMXC
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

// I need to sort from small to large and do the test cases for the small first which will make the large easier

// some other examples: 9 is IX while 8 is VIII
// 300 is CCC while 400 is CD

// if number is less than 1000 then it won't need an M but it might need a CM
// if number is less than 100 it won't need D or M
// the longest possible string is MMMDCCCLXXXVIII
// V, L, and D only appear a maximum of one time
// I, X, L, C, and M all appear a maximum of 3 times
// I, II, III, IV, V, VI, VII, VIII, IX, XI, XII, XIII, XIV, XV, XVII, XVIII, XIX

const romanNumerals = (num) => {
    const romanMap =  [{ value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }]
    let romanString = ''

    for (let i = 0; i < romanMap.length; i++){
        // checks how many times map number fits into the number
        let count = 0
         if ((num / romanMap[i].value) >= 1){
            count = Math.floor(num/romanMap[i].value)
            for (let j = 0; j < count; j++) {
                romanString += romanMap[i].symbol
            }
            num -= romanMap[i].value * count
        }
        }
    console.log(romanString)
    return romanString
}

romanNumerals(1000)