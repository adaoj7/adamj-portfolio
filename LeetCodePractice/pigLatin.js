// take in a string of words and punctuation
// separate out the punctuation 
// change the location of the first letter to the end and then add ay to it

// this one appears fairly simple, but the challenge is going to be the regex of it
// for filtering out letters and numbers it should be /[^A-Za-z0-9]/g

// string received is 'Hello my name is Adam' and returns 'elloHay ymay amenay siay damay'

const pigIt = (str) => {
    
    let pigString = str.split(' ')
    // console.log(pigString)
    for (let i = 0; i < pigString.length; i++) {
        let pigWord = pigString[i].split('')
        const firstLetter = pigWord.shift()
         if (pigWord)
        pigWord.push(firstLetter)
        pigWord.push('a')
        pigWord.push('y')
        pigWord = pigWord.join('')
        pigString[i] = pigWord
        
    }
    pigString = pigString.join(' ')
    console.log(pigString)
}

pigIt('hello my name is adam')