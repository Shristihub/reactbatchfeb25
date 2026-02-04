import GreetMessage from "./components/GreetMessage";
import Header from "./components/Header";

function App(){
  const msg = 'Have a great learning experience!';
  return(
    <>
    <Header tagline="Training simplified"></Header>
    <GreetMessage message={msg}></GreetMessage>
    </>
  );
}
export default App;