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

const romanNumerals = (num) => {
    
    let numLength = num.toString().length
    let numArr = num.toString().split('')
    console.log(numArr)
    if (numLength === 4) {

    } else if (numLength === 3) {

    } else if (numLength === 2) {

    } else if (numLength === 1) {
        
    }
}

romanNumerals(399)