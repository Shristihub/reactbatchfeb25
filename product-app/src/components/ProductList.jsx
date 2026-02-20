import ProductCard from "./ProductCard";

function ProductList({products,onSelect}) {
  

  return (
    <>
     <h1>List of Products</h1>
     <div>
        {products.map(product=>
         <ProductCard product={product} 
                      key={product.id}
                      onView={onSelect}
                      ></ProductCard>
        )}
     </div>
    </>
  );
}

export default ProductList;
