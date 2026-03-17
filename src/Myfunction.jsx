const Myfunction = ()=>{

    // const name = ()=>{
    //     return "Shabrej Ahmad";
    // }

    const getName = (names)=>{
        return names;
    }

    const handleClick = ()=>{
        alert("Button is Clicked !");
    }

    const handleInput = (event)=>{
        console.clear();
        console.log(event.target.value);
    }

    const handleMouseOver = ()=>{
        console.log("Mouse is over on text");
    }

    const handleDoubleClick = ()=>{
        console.log("Double click on text");
    }

    const name = "Shabrej";
    const name1 = "Ahmad";

    return (
        <div>
<h1 className="heading">Function Component {getName(name)}</h1>
        <h2 className="test">Function Component {getName(name1)}</h2>
        <button onClick={handleClick}>Click Me</button><br /><br />
        <button onClick={()=>{alert("Hello from Inline Function")}}>Inline Button</button><br /><br />
        <input type="text" onChange={handleInput} placeholder="Type Something" /><br /><br />
        <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga rerum in magni blanditiis voluptas ipsam reiciendis exercitationem temporibus ab! Quo, nihil quam iste voluptate cumque maiores sint debitis repellendus?</p>
        </div>
        
    )
}

export default Myfunction