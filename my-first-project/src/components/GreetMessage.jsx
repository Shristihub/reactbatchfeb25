import { useState } from "react";



function GreetMessage({message}) {
    const [msg,setMsg] = useState(message);
    const changeMessage = ()=>{
       alert(msg);
       setMsg('Have a great day');
      
    }
    
    return ( 
        // <h2>{props.message}</h2>
        <>
        <h2>{message}</h2>
        <h2>{msg}</h2>
        <button onClick={changeMessage}>Change</button>
        </>
     );
}

export default GreetMessage;