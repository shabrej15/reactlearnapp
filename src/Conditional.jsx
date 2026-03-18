const Conditional = ()=>{

    // const isLoggedin = false;
    // let message;
    // const hasmessage = true;
    const visibility = true;

    const finalvisibility = visibility ? "visible" : "unvisible";


    // if(isLoggedin){
    //            return <h1>Welcome User!</h1>
    //         }else{
    //            return <h1>Please Login</h1>
    //         }

    // if(isLoggedin){
    //     message = <h1>Welcome User!</h1>
    // }else{
    //     message = <h1>Please Login</h1>
    // }
    // return message;

    // return (
    //     <div>
    //         {isLoggedin ? <h1>Welcome User!</h1> : <h1>Please Login</h1>}
    //     </div>
        
    // )

//     message = isLoggedin ? <h1>Welcome User!</h1> : <h1>Please Login</h1>
    
//     return (
//         <div>
// {message}
//         </div>
//     )

// return (
//     <div>
//         {hasmessage && <p>you have a new message</p>}
//     </div>
// )

// return(
//     <div>
//         <h1 className={isLoggedin ? "test" : "heading"}>Welcome User !</h1>
//         <h1 className={visibility ? "visible" : "unvisible"}>Please Login !</h1>
//     </div>
// )

return(
    <div>
        <h1 className={finalvisibility}>Welcome User !</h1>
    </div>
)
    
    

}

export default Conditional;