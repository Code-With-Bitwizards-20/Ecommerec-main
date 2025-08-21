import React, { useState } from 'react';
import Layout from '../components/Layout';
import AddToCartPopup from '../components/AddToCartPopup';
import { useCart } from '../context/CartContext';
import { Knifes as KnifeImages } from '../assets/indexForimages';

const Knifes = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Only these two products with images
  const knives = [
    {
      id: 21,
      name: "Gerber Knife",
      brand: "Gerber",
      price: 24.49,
      image: KnifeImages.GerberKnife,
      description: "Gerber Strongarm Fixed Blade Fine Edge Knife Modular MOLLE Sheath Coyote Brown",
      rating: 4.9,
      category: "Knives",
      material: "High-Carbon Steel"
    },
    {
      id: 22,
      name: "Global Knife G5",
      brand: "Global",
      price:  24.49,
      image: KnifeImages.GlobalKnivesG5,
      description: "Global Knives G-5 Vegetable Nakiri Knife 18cm - Made in Japan",
      rating: 4.8,
      category: "Knives",
      material: "Stainless Steel"
    }
  ];

  const [displayedProducts, setDisplayedProducts] = useState(knives);

  const handleSearch = (searchTerm) => {
    let filtered = knives;
    if (searchTerm.trim() !== '') {
      filtered = knives.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.material.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setDisplayedProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <Layout onSearch={handleSearch}>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gray-600 to-slate-700 rounded-2xl text-white p-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Knives</h1>
          <p className="text-xl opacity-90">Premium cutlery for professional chefs and cooking enthusiasts</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((knife) => (
          <div key={knife.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="p-6 text-center">
              <img src={knife.image} alt={knife.name} className="w-32 h-32 object-contain mx-auto mb-4" />
              <div className="mb-2 flex justify-center gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {knife.category}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {knife.material}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{knife.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{knife.brand}</p>
              <p className="text-gray-600 text-sm mb-4">{knife.description}</p>
              
              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(knife.rating) ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({knife.rating})</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-gray-700 mb-4">
                ${knife.price}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(knife)}
                className="w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 bg-gray-700 text-white hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {displayedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No knives found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}

      {/* Safety Notice */}
      <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Safety Notice</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>These are professional-grade knives. Please handle with care and keep away from children. Always use proper cutting techniques and store safely when not in use.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Knife Care Tips</h3>
        <ul className="text-sm text-blue-700 space-y-2">
          <li>• Hand wash immediately after use and dry thoroughly</li>
          <li>• Use a honing steel regularly to maintain the edge</li>
          <li>• Store in a knife block or magnetic strip</li>
          <li>• Avoid cutting on hard surfaces like glass or stone</li>
          <li>• Professional sharpening recommended every 6-12 months</li>
        </ul>
      </div>

      {/* Add to Cart Popup */}
      <AddToCartPopup
        isVisible={showPopup}
        product={selectedProduct}
        onClose={closePopup}
        categoryColor="gray"
      />
    </Layout>
  );
};

export default Knifes;