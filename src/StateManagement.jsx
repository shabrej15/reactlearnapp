import {useState} from 'react'

function StateManagement() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>StateManagement</h1>
        <h2>Count : {count}</h2>
       
        <button onClick={()=>setCount(count+1)}>Count</button><br /><br />

        <button onClick={()=>setCount(count-1)}>Count Decrease</button>
    </div>
  )
}

export default StateManagement