const Myfunction = ()=>{

    // const name = ()=>{
    //     return "Shabrej Ahmad";
    // }

    const getName = (names)=>{
        return names;
    }

    const name = "Shabrej";
    const name1 = "Ahmad";

    return (
        <div>
<h1 className="heading">Function Component {getName(name)}</h1>
        <h2 className="test">Function Component {getName(name1)}</h2>
        
        </div>
        
    )
}

export default Myfunction