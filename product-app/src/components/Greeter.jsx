import { useState } from "react";

function Greeter({message,onNameChange}) {
    const [msg,setMsg] = useState(message);
    // let handleMsg = ()=>{
    //     setMsg("Have a great Day")
    // }
    return ( <>
    <h1>{msg}</h1>
    
    <input type="text" onChange={(e)=>{
        // console.log(e.target.value);
        setMsg(e.target.value)
    }}/>
    {/* <button onClick={()=>setMsg("Have a great Day")}>Change</button> */}
    <br></br>
    <button onClick={()=>onNameChange(msg)}>Print Name</button>
  
    </> );
}

export default Greeter;