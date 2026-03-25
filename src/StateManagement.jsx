import {useState} from 'react'

function StateManagement() {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(18)
    const [student, setStudent] = useState({
        name : "Shabrej Ahmad",
        grade : "A",
        city : "Haridwar"
    })

    const changeCity=() =>{
        setStudent({...student, city:"Mumbai"})
    }
  return (
    <div>
        <h1>StateManagement</h1>
        <h2>Count : {count}</h2>
       
        <button onClick={()=>setCount(count+1)}>Count</button><br /><br />

        <button onClick={()=>setCount(count-1)}>Count Decrease</button><br /><br />

        <button onClick={()=>setIsVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'} Text</button>

        {isVisible && <p>This is secret text</p>}<br /><br />

        <button onClick={()=>setIsLike(!isLike)}>{isLike ? '❤️ Liked' : '💙 Like'}</button><br /><br />

    <h1>Name is : {name}</h1>
        <button onClick={()=>setName("Shabrej Ahmad")}>Change Name</button>
<h1>Age is : {age}</h1>
        <button onClick={()=>setAge(age+1)}>Change Age</button><br /><br />

        <h2>Name is : {student.name}</h2><br />
        <h2>Grade is : {student.grade}</h2><br />
        <h2>City is : {student.city}</h2><br />
        <button onClick={changeCity}>Change city</button>


    </div>
  )
}

export default StateManagement