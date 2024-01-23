import React, { useState, useEffect } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ProductCard from './components/subcomponents/productCard';

const Productpages = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

 

  return (
    <div> 
        <div>
        <Navbar></Navbar>
        </div>
        <div>

      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          
          <ProductCard key={product._id}>{product.productName}
            productName={product.productName} 
            Price={product.price}
            Image={product.imageUrl}
            </ProductCard>
        ))}
      </ul>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
  );
};

export default Productpages;
