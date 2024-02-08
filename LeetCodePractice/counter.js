const counterCounter = (n) => {
    console.log(n)
    return () => {
        n++
        console.log(n)
    }
}

let counter = counterCounter(10)
counter()
counter()
counter()

