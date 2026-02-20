function ProductDetails({product}) {
   if(!product){
    return "choose one product"
   }

    return ( <>
      <p>Name: {product.productName}</p>
      <p>Price: {product.price}</p>
      <p>Brand:{product.brand}</p>
      <p>{product.instock?"Available":"Out of Stock"}</p>
    
    
    </> );
}

export default ProductDetails;