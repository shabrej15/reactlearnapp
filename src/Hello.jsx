const Hello = ()=>{
    const name = "Shabrej Ahmad";
    const paragraphstyles = {
        color:"green",
        fontSize:30,
        backgroundColor:"pink"
    }
    
    return (
        <div>
            <h2 className="test">Hello {name} component</h2>
<p style={paragraphstyles}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque, dolores laboriosam officia tempora eos ea maiores est tenetur minima fugiat voluptates nostrum facilis odio minus nemo, provident sapiente mollitia!</p>
<p style={{color:"blue",fontSize:30,backgroundColor:"gray"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex doloremque, dolores laboriosam officia tempora eos ea maiores est tenetur minima fugiat voluptates nostrum facilis odio minus nemo, provident sapiente mollitia!</p>
        </div>
        
    );
    
};

export default Hello;