import {useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0)

    useEffect(() => {
        const storedCount = localStorage.getItem('pageVisits')
        console.log(storedCount)
        let initialCount = Number(storedCount) || 0
        setCount(initialCount + 1)
        initialCount += 1
        const countString = initialCount.toString()
        console.log(countString)
        localStorage.setItem('pageVisits', countString)
    },[])

  return (
    <div className='text-primary-content'>{count}</div>
  )
}

export default Counter