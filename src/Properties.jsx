const Properties = ({name,age = 18 , hobbies = [], user= {}, label , handleClick })=>{

    //const {name,age} = props
    // return(
    //     <div>
    //         <h1>Props Component</h1>
    //         <h2>Name : {props.name}</h2>
    //         <p>Age : {props.age}</p>
    //     </div>
    // )

    return(
        <div>
            <h1>Props Component</h1>
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
 <ul>
                {
                    hobbies.map((hobby)=>(
                        <li>{hobby}</li>
                    ))
                    }
            </ul>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>

            <button onClick={handleClick}>{label}</button>
            <button onClick={handleClick}>{label}</button>
            
           
        </div>
    )
}

export default Properties;