//List all numbers less than the given number that are multiples of 3 or 5 if number is negative return 0

// Given 25 we would get 21, 20, 18, 15, 12, 10, 9, and 6
// Then we need the sum of these numbers

// Problems I will run into
// Figuring out how to avoid adding multiples of 3 and 5: 15, 30, 45

const solution = (num) => {
    // start with the sum being 0
    let sum = 0
    console.log(num)
    // loop through all numbers less than given number and greater than 0
    for (let i = num-1; i > 0; i--) {
        // if number % 3 === 0 add number to sum
        // if number % 5 === 0 add number to sum
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i
        }
        else if (i % 3 === 0) {
            sum += i
        }
        else if (i % 5 === 0) {  
            sum += i
        }
    }
    console.log(sum)
    return sum
}

solution(435453)