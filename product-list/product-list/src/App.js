import './App.css';
import ProductForm from './component/ProductForm/ProductForm';
import ProductList from './component/ProductList/ProductList';
import React, {useState} from "react";


function App() {
  const InitialProducts =[
    
      {name: "laptop", price: 999.99, category: "electronics", featured: false },
      {name: "t-shirt", price:35 , category: "clothing", featured: true },
      {name: "Microwave", price:45 , category: "electronics", featured: false },
      {name: "smartphone", price: 55, category: "electronics", featured: true },
      {name: "jeans", price: 65, category: "clothing", featured: false },
      {name: "blender", price: 75, category: "electronics", featured: false },
      {name: "wireless headphones", price:85 , category: "electronics", featured: false },
      {name: "socks", price:99 , category: "clothing", featured: false },
    ];
    const [products, setProducts] = useState (InitialProducts)
  
  return (
    <div className="App">
      <header className="Product List">
     <ProductList products= {products} setProducts={setProducts}/>
     <ProductForm products= {products} setProducts= {setProducts}/>
      </header>
    </div>
  );
}

export default App;
