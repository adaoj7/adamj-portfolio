//function will take in a string
// string will be one or more words
// string must be returned with words in the same order
// if the string is longer than 5 words then the function should reverse the order of the word
// words will be separated by spaces. If no spaces then no subsequent word



const spinWords = (str) => {
    const splitStr = str.split(' ')
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].length >= 5){
            let letterArr = splitStr[i].split('')
            let reverseArr = [];
            for (let i = letterArr.length - 1; i >= 0; i--){
                reverseArr.push(letterArr[i])
            }
            letterArr = reverseArr.join('')
            splitStr.splice(i,1,letterArr)
        }
    }
    str = splitStr.join(' ')
    console.log(str)
    return str
}

spinWords('my name is missy')
spinWords('its fun to solve cool problems like this')
spinWords('trying to create svgs really sucks')
spinWords('Hello my name is caleb and I am silly')