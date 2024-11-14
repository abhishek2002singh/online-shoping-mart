import React, { useState, useEffect } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { MdSignalWifiOff } from 'react-icons/md';

const categories = [
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Jewelry", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
  { label: "Women's Clothing", value: "women's clothing" },
];

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); 
        setLoading(false); // Set loading to false once data is fetched
        
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category
        ? products.filter(product => product.category === category)
        : products
    );
  };

  const handleTopRatingFilter = () => {
    const topRatedProducts = [...products].sort((a, b) => b.rating.rate - a.rating.rate);
    setFilteredProducts(topRatedProducts);
  };

  const onlinestatus= useOnlineStatus()

  if (!onlinestatus) {
    return (
      <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center py-4 flex items-center justify-center space-x-4 z-50">
        {/* Offline Icon */}
        <MdSignalWifiOff size={50} className="text-white" />
        <div>
          <h1 className="text-2xl font-semibold">
            Looks like you are offline.
          </h1>
          <p className="mt-2 text-lg">
            Please check your internet connection.
          </p>
        </div>
      </div>
    );
  }



  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto flex flex-wrap gap-4 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`px-4 py-2 text-sm font-semibold text-white rounded-full 
              ${selectedCategory === cat.value ? 'bg-indigo-700' : 'bg-indigo-500'} 
              hover:bg-indigo-600 transition`}
            onClick={() => handleCategoryFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
        <button
          className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
          onClick={handleTopRatingFilter}
        >
          Top Rating
        </button>
      </div>

      {/* Product List with Shimmer Effect */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array(8).fill(0).map((_, idx) => <Shimmer key={idx} />) // Render shimmer cards while loading
          : filteredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating.rate}
              />
            ))
        }
      </div>
    </div>
  );
};

export default Main;
