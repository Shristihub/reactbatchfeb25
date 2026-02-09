export default function GreetMessage({message}) {
 const greet = ()=>alert(message);
 return(
  <>
  <button onClick = {greet}>Show Message</button>
  <button onClick = {()=>alert(message)}>Show Message</button>
  </>

 );
}
