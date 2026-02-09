import { useState } from "react";

export default function ProductDetails() {
   const [productName,setProductName] =useState("Laptop");
   const changeProduct =() => {
//      setProductName("Mobile");
        alert("Product name is "+productName);
   }
    return (
        <>
        <h1>Product Details</h1>
        <h2>The product selected is {productName}</h2> 
        <input type="text" value={productName} 
                          onChange={(e)=>setProductName(e.target.value)}/>
        <button onClick={changeProduct}>Show Product Name </button>
               </>
    );
}