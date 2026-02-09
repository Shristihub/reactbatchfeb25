import GreetMessage from "./components/GreetMessage";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";

function App(){
  const msg = 'Have a great learning experience!';
  return(
    <>
    {/* <Header tagline="Training simplified"></Header>*/}
    <GreetMessage message={msg}></GreetMessage> 
    <ProductDetails></ProductDetails>
    </>
  );
}
export default App;