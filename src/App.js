import './App.css';
import './components/Products.css';
import { useState } from 'react';
import productsData from './mocks/products.json';
import { Products } from './components/Products.jsx';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { is_DEVELOMENT } from './config.js';
function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 5000
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
  return { filters, filterProducts, setFilters }
}
function App() {
  const [products] = useState(productsData.products);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {is_DEVELOMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
