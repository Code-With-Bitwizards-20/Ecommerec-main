import React, { useState } from 'react';
import Layout from '../components/Layout';
import AddToCartPopup from '../components/AddToCartPopup';
import { useCart } from '../context/CartContext';
import { OtherImages } from '../assets/indexForimages';

const Others = () => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Only these two products with images
  const otherProducts = [
    {
      id: 1,
      name: "POKEMON TCG",
      brand: "Pokemon",
      price: 50.49,
      image: OtherImages.Pokemon,
      description: "POKEMON TCG Scarlet & Violet Twilight Masquerade Booster Box",
      rating: 4.7,
      category: "Others"
    },
    {
      id: 2,
      name: "Durvet Invermectin",
      brand: "Durvet",
      price: 25.51,
      image: OtherImages.DurvetInvermectin,
      description: "3 Pack Paste Wormer 0.21 oz Horse Dewormer Durvet Apple Flavor Safe & Effective",
      rating: 4.5,
      category: "Others"
    }
  ];

  const [displayedProducts, setDisplayedProducts] = useState(otherProducts);

  const handleSearch = (searchTerm) => {
    let filtered = otherProducts;
    if (searchTerm.trim() !== '') {
      filtered = otherProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl text-white p-8 mb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Other Products</h1>
          <p className="text-xl opacity-90">Discover our diverse collection of lifestyle and utility products</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="p-6 text-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mx-auto mb-4" />
              <div className="mb-2">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {product.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-purple-600 mb-4">
                ${product.price}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 bg-purple-600 text-white hover:bg-purple-700"
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
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}

      {/* Add to Cart Popup */}
      <AddToCartPopup
        isVisible={showPopup}
        product={selectedProduct}
        onClose={closePopup}
        categoryColor="purple"
      />
    </Layout>
  );
};

export default Others;