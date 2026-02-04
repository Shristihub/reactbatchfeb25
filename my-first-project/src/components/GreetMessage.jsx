export default function GreetMessage(props) {
 const greet = ()=>alert(props.message);
 return(
  <>
  <button onClick = {greet}>Show Message</button>
  <button onClick = {()=>alert(props.message)}>Show Message</button>
  </>

 );
}
