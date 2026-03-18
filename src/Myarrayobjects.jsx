const Myarrayobjects = ()=>{

    const fruits = ['Apple','Banana','Orange'];

    const user = {
        firstname : "Shabrej",
        lastname : "Ahmad",
        age : "33"
    }

    const userdetails = [
        {firstname:"Shabrej",lastname:"Ahmad",age:"33"},
        {firstname:"john",lastname:"doe",age:"30"},
        {firstname:"marry",lastname:"kom",age:"32"},

    ]

    const fullname = (users)=>{
        return users.firstname+ " "+ users.lastname
    }

    return (
        <div>
            <h1>Array Objects Component</h1>
            <ul>
{
fruits.map((fruit,index)=>(
<li>{index} - {fruit}</li>
        ))

}

  </ul>

<h2>Personal Detail :-</h2>
<p>FirstName : {user.firstname}</p>
<p>LastName : {user.lastname}</p>
<p>Age : {user.age}</p>


<p>Fullname : {fullname(user)}</p>
<p>Age : {user.age}</p>

          
          <ul>
            {
                userdetails.map((userdetail,index)=>(
              <li>
               {index} - {userdetail.firstname} {userdetail.lastname} is {userdetail.age} year old
              </li>      
                ))
            }
          </ul>

          <ul>
            {
                userdetails.map((userdetail) => (
                    <li>
                         {fullname(userdetail)} is {userdetail.age} year old
                    </li>
                   
                ))
            }
          </ul>
        
            
        </div>
    )
}

export default Myarrayobjects;