import { useState } from "react";
// import Greeter from "./components/Greeter"
import ProductList from "./components/ProductList";
import data from "./data/products.json";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState(data.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <div className="container">
        <div className="leftpanel">
          <ProductList products={products} onSelect={setSelectedProduct} />
        </div>
        <div className="rightpanel">
          <ProductDetails product={selectedProduct} />
        </div>
      </div>
    </>
  );

  //  let msg = "hello";
  //  let [data,setData] =useState('')
  //  let handleNameChange = (mydata)=>{
  //   console.log("Got data from child ");
  //   setData(mydata);
  //  }
  //  return (
  //   <>
  //   <Greeter message = {msg} onNameChange = {handleNameChange} ></Greeter>
  //   {data}
  //   </>
  // )
}

export default App;
