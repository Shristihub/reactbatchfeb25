function ProductCard({product,onView}) {
    const onViewProduct = (product)=>{
        console.log(product);
        onView(product);
    } 

    return ( 
     <>
      <p>Name: {product.productName}</p>
      <p>Price: {product.price}</p>
      <p>{product.instock?"Available":"Out of Stock"}</p>
      <button onClick={()=>onViewProduct(product)}>View Details</button>
     </>

     );
}

export default ProductCard;