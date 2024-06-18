import './App.css';
import './components/Products.css';
import { useState } from 'react';
import productsData from './mocks/products.json';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header.jsx';
function App() {
  const [products] = useState(productsData.products);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 2500
  });
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice &&
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )

      )
    });
  }
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
