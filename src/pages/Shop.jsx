import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="container">
      <h2>Shop Products</h2>
      <div className="grid">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.thumbnail} alt="" />
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
